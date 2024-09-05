import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'
import InputMask, { ReactInputMask } from 'react-input-mask'

export type InputProps = {
  label: string
  id: string
  handleOnChange: (value: string) => void
  placeholder?: string
  isMasked: boolean
  mask?: string
  value?: string
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, handleOnChange, isMasked, ...props }, ref) => {
    return (
      <div className="flex items-start justify-start gap-0 flex-col w-full">
        <label
          htmlFor={props.id}
          className="text-sm font-medium text-gray-700 w-full"
        >
          {props.label}
        </label>

        <div className="relative mt-1 w-full">
          {isMasked ? (
            <InputMask
              mask={props.mask!}
              disabled={props.disabled}
              className="relative w-full rounded-md border border-slate-900/30 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              value={props.value}
              onChange={e => {
                handleOnChange(e.target.value)
              }}
              type="text"
              maskChar={null}
              ref={ref as LegacyRef<ReactInputMask> | undefined}
              {...props}
            />
          ) : (
            <input
              type="text"
              disabled={props.disabled}
              className="disabled:bg-gray-100 w-full rounded-md border border-slate-900/30 bg-white py-2 pl-3 pr-10 text-left shadow-sm hover:border-slate-900/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm h-14"
              value={props.value}
              onChange={e => {
                handleOnChange(e.target.value)
              }}
              ref={ref}
              {...props}
            />
          )}
          {children}
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'
