import { Modal } from './modal';

export type ErpModalChildrenDefaultProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export type ErpModalProps = {
  open: boolean;
  title: string;
  className?: string;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
  fixedHeader?: boolean;
};
export const ErpModal = ({
  open,
  setOpen,
  title,
  children,
  className,
  fixedHeader,
}: ErpModalProps) => {
  return (
    <Modal open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <Modal.Content className={className}>
        <Modal.Header className={className} fixedHeader={fixedHeader}>
          <Modal.Header.HeaderTitle>{title}</Modal.Header.HeaderTitle>
        </Modal.Header>
        <div className="p-6 w-full">{children}</div>
      </Modal.Content>
    </Modal>
  );
};
