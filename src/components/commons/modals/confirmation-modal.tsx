import { t } from '@/lib/languages/language';
import { useAppStore } from '@/store/app-store';
import { ErpModal } from './erp-modal';
import { Button } from '@/components/ui/button';

export function ConfirmationModal({
  onConfirm,
  isOpen,
  setOpen,
  isLoading,
  confirmActionText,
  titleText,
  descriptionText,
}: {
  onConfirm: any;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isLoading: boolean;
  confirmActionText: string;
  titleText: string;
  descriptionText: string;
}) {
  const { language } = useAppStore();

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <ErpModal
      open={isOpen}
      setOpen={setOpen}
      title={titleText}
      className="max-w-[600px] overflow-auto"
    >
      <div className="flex flex-col w-full">
        <div className="max-w-[600px] mb-6">
          <p>{descriptionText}</p>
        </div>

        <div className="flex flex-row w-full items-center justify-center gap-5 max-w-[1200px]">
          <Button onClick={onConfirm} disabled={isLoading}>
            {isLoading ? 'Carregando' : confirmActionText}
          </Button>
          <Button variant={'outline'} onClick={onCancel}>
            {t(language).modal.confirmation_modal.buttons.cancel}
          </Button>
        </div>
      </div>
    </ErpModal>
  );
}
