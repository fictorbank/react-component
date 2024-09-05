import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Button, ButtonProps } from '../../ui/button'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
} & HTMLAttributes<HTMLDivElement>

export const Modal = ({ open, onOpenChange, ...props }: ModalProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      {open && <div className="w-full ">{props.children}</div>}
    </Dialog>
  )
}

type HeaderProps = HTMLAttributes<HTMLDivElement> & { fixedHeader?: boolean }

const Header = (props: HeaderProps) => {
  return (
    <DialogHeader>
      <div
        className={cn(
          'w-full flex flex-row items-center justify-center py-2 border-b border-b-ledgeraio-gray/30',
          props.className + cn('w-full', props.fixedHeader ? 'fixed' : '')
        )}
      >
        {props.children}
      </div>
    </DialogHeader>
  )
}

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-base font-bold">{children}</span>
}

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <DialogContent
      className={cn('w-full p-0', props.className)}
      onInteractOutside={e => {
        e.preventDefault()
      }}
    >
      <div className="w-full">{props.children}</div>
    </DialogContent>
  )
}

const Footer = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <DialogFooter>
      <div className="w-full flex flex-row items-center justify-center py-2 px-10">
        {props.children}
      </div>
    </DialogFooter>
  )
}

const ModalFooterButton = (props: ButtonProps) => {
  return <Button {...props} />
}

Footer.Button = ModalFooterButton
Header.HeaderTitle = HeaderTitle

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer
