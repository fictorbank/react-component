import { languageKey, t } from '@/lib/languages/language'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/store/app-store'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { ReactNode } from 'react'
import { Column, useTable } from 'react-table'

export interface TableProps<T> {
  columns: any[]
  data: T[]
  title?: string
  items?: string[]
  hasAddButton?: boolean
  addButtonText?: string
  handleOnClickAddButton?: () => void
  children?: React.ReactNode
  hasDropdown?: boolean
}

export function LargeTable<T>({ data, columns, children }: TableProps<T>) {
  const { getTableProps, getTableBodyProps, rows, prepareRow, headers } =
    useTable({
      data: data as any,
      columns
    })

  return (
    <div className="w-full mb-8 shadow-xs overflow-x-auto">
      <div className="w-full overflow-x-auto border rounded-lg border-ledgeraio-gray/30">
        <table className="w-full whitespace-no-wrap  " {...getTableProps()}>
          <thead>
            <tr className="text-xs font-bold tracking-wide text-left text-white uppercase  bg-slate-900">
              {headers?.map(header => {
                return (
                  <th
                    key={header?.id}
                    className="px-4 py-3 text-nowrap border border-gray-600 text-center "
                  >
                    {header?.render('Header')}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y " {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr
                  className={`border-b border-b-ledgeraio-gray/30 ${
                    i % 2 === 0 ? 'bg-white ' : 'bg-gray-300/60'
                  }`}
                  {...row.getRowProps()}
                  key={row.id}
                >
                  {row.cells.map(cell => {
                    return <>{cell.render('Cell')}</>
                  })}
                  {children}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const TableCell = ({
  children,
  className,
  last
}: {
  children: React.ReactNode
  className?: string
  last?: boolean
}) => {
  if (last) {
    return (
      <td
        className={cn(
          'px-4 py-3 text-sm flex flex-row items-center justify-center whitespace-nowrap',
          className
        )}
      >
        {children}
      </td>
    )
  }
  return (
    <td
      className={cn(
        'px-4 py-3 text-sm border-r border-r-ledgeraio-gray/30 whitespace-nowrap',
        className
      )}
    >
      {children}
    </td>
  )
}

interface ErpTableAction<T> {
  Component: ReactNode
  key: string
  disabled?: (data: T) => boolean
  onClick: (data: T) => Promise<void>
}

interface ErpTableFieldsActions<T> {
  onClick: (data: T) => Promise<void>
}

type ErpTableFields<T, J> = {
  [K in keyof T]?: J
}
interface ErpTableProps<T> {
  data: T[]
  actions?: ErpTableAction<T>[]
  fields: ErpTableFields<T, string>
  cellModifiers?: ErpTableFields<T, (data: T) => ReactNode>
  fieldsActions?: ErpTableFields<T, ErpTableFieldsActions<T>>
  name: languageKey | any
  order: (keyof T)[]
  pagination?: PaginationProps
}

interface PaginationProps {
  currentPage: number
  pages: number
  onMovePage: (index: number) => void
  size: string
  onChangeSize: (size: string) => void
}

export function ErpTable<T>({
  data,
  fields,
  name,
  actions,
  fieldsActions,
  order,
  pagination,
  cellModifiers: cellModifiers
}: ErpTableProps<T>) {
  const { language } = useAppStore()
  const keys = order

  const columns: Column[] = keys.map(key => ({
    Header: fields
      ? fields[key]
      : (t(language)[name as languageKey] as any)[key],
    accessor: key as string,
    Cell: ({ cell }) => {
      if (fieldsActions && fieldsActions[key]) {
        return (
          <TableCell>
            <button
              type={'button'}
              className="decoration-blue-500 underline text-blue-500"
              onClick={() =>
                fieldsActions[key]?.onClick(cell.row.original as T)
              }
            >
              {(cell.row.original as any)[key]}
            </button>
          </TableCell>
        )
      }

      if (cellModifiers && cellModifiers[key]) {
        return (
          <TableCell>
            {cellModifiers[key]?.(cell.row.original as any as T)}
          </TableCell>
        )
      }
      return <TableCell>{(cell.row.original as any)[key]}</TableCell>
    }
  }))

  if (actions) {
    columns.push({
      Header: t(language).commons.actions,
      accessor: '',
      Cell: ({ cell }) => (
        <TableCell last>
          <>
            {actions.map(item => (
              <button
                disabled={
                  item.disabled ? item.disabled(cell.row.original as T) : false
                }
                type={'button'}
                className="disabled:cursor-not-not-allowed disabled:opacity-50 mx-2 p-1"
                key={item.key}
                onClick={() => item.onClick(cell.row.original as T)}
              >
                {item.Component}
              </button>
            ))}
          </>
        </TableCell>
      )
    })
  }

  return (
    <div className="flex flex-col w-full">
      <LargeTable data={data} columns={columns} title={name} />
      {pagination && (
        <PaginationComponent
          currentPage={pagination.currentPage}
          onMovePage={pagination.onMovePage}
          totalPages={pagination.pages}
          size={pagination.size}
          onChangeSize={pagination.onChangeSize}
        />
      )}
    </div>
  )
}
export const PaginationComponent = ({
  currentPage,
  totalPages,
  onMovePage,
  size,
  onChangeSize
}: {
  totalPages: number
  currentPage: number
  onMovePage: (page: number) => void
  size: string
  onChangeSize: (size: string) => void
}) => {
  return (
    <div className="flex justify-center items-center gap-6">
      <select value={size} onChange={e => onChangeSize(e.target.value)}>
        <option value={10}>10</option>
        <option value={100}>100</option>
      </select>

      <div className="flex justify-center items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage === 1) {
              return
            }
            onMovePage(currentPage - 1)
          }}
          className={cn(
            'flex items-center justify-center size-9 border border-ledgeraio-gray/30 rounded-lg bg-white hover:bg-slate-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white'
          )}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => {
            const newPage = currentPage + 1
            if (newPage > totalPages) {
              return
            }
            onMovePage(currentPage + 1)
          }}
          disabled={currentPage === totalPages}
          className={cn(
            'flex items-center justify-center size-9 border border-ledgeraio-gray/30 rounded-lg bg-white hover:bg-slate-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white'
          )}
        >
          <ChevronRight />
        </button>
      </div>

      <span>
        Página {currentPage} de {totalPages}
      </span>
    </div>
  )
}
