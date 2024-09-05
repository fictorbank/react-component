import { languages, t } from '@/lib/languages/language'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/store/app-store'
import { useAuthStore } from '@/store/auth-store'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'

const getMenuProps: (language: languages) => SideBarProps = (
  language: languages
) => ({
  sections: [
    {
      title: t(language).menu.sidebar.card.title,
      forAdmin: false,
      items: [
        {
          title: t(language).menu.sidebar.card.preApprovedLimit,
          location: '/card-pre-approved-limit'
        },
        {
          title: t(language).menu.sidebar.card.request,
          location: '/card-request'
        }
      ]
    },
    {
      title: t(language).menu.sidebar.whitelist.title,
      forAdmin: true,
      items: [
        {
          title: t(language).menu.sidebar.whitelist.manage,
          location: '/whitelist'
        },
        {
          title: t(language).menu.sidebar.whitelist.upload,
          location: '/upload-whitelist'
        },
      ]
    },
    {
      title: t(language).menu.sidebar.settings.title,
      forAdmin: true,
      items: [
        {
          title: t(language).menu.sidebar.settings.users,
          location: '/user'
        }
      ]
    },
  ]
})

export interface MenuSection {
  title: string
  items: MenuItem[]
  forAdmin?: boolean
}
export interface MenuItem {
  title: string
  location: string
}

function MenuItemSection({
  item,
  current
}: { item: MenuSection; current: string }) {
  return (
    <li className="flex flex-col items-start w-full">
      <h1 className="text-white font-bold text-lg w-full pl-2">{item.title}</h1>
      <div className="flex flex-col items-start gap-2 w-full">
        {item.items.map(item => (
          <MenuItemLink item={item} key={item.title} current={current} />
        ))}
      </div>
    </li>
  )
}

function MenuItemLink({ item, current }: { item: MenuItem; current: string }) {
  return (
    <li
      className={cn(
        'w-full pl-2 rounded-sm',
        current === item.location ? 'bg-slate-200' : ''
      )}
    >
      <Link
        to={item.location}
        className={cn(
          'block text-md',
          current === item.location
            ? ''
            : 'text-white  hover:text-slate-400 transition-colors duration-150'
        )}
      >
        <div className="flex flex-row gap-4">{item.title}</div>
      </Link>
    </li>
  )
}

export interface SideBarProps {
  sections: MenuSection[]
}

export const SideBar = () => {
  const pathname = useLocation().pathname

  const { language } = useAppStore()
  const { session, logout } = useAuthStore()
  const { handleSubmit } = useForm()

  const onSubmit = () => {
    logout()
  }

  const menuProps = getMenuProps(language)

  return (
    <div className="fixed flex flex-col justify-between inset-y-0 left-0 w-52 overflow-y-auto mt-20 bg-slate-800">
      <div className="px-2 py-2">
        <ul className="space-y-6">
          {menuProps.sections
            .filter(item => {
              if (item.forAdmin) {
                return (
                  session?.user?.role === 'admin' ||
                  session?.user?.role === 'owner'
                )
              }
              return true
            })
            .map(item => (
              <MenuItemSection
                item={item}
                key={item.title}
                current={pathname}
              />
            ))}
        </ul>

        <ul className="mt-4">
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <button type="submit" className="flex items-center gap-2 pl-2">
              <div>
                <p className="text-white font-bold text-lg hover:text-slate-400">
                  <span>{t(language).menu.sidebar.logout}</span>
                </p>
              </div>
            </button>
          </form>
        </ul>
      </div>
    </div>
  )
}
