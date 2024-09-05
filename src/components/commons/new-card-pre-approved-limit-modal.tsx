import { useState } from 'react';
import { t } from '@/lib/languages/language';
import { useAppStore } from '@/store/app-store';
import Input from '@/components/commons/erp-input';
import { ErpModal } from '@/components/commons/modals/erp-modal';
import { Button } from '../ui/button';
import { useModalContext } from '@/contexts/message-modal-context';
import { CardPreApprovedLimit } from '@/types/card-pre-approved-limit';
import {
  getPersonTypeByDocument,
  isValidEmail,
  isValidPhoneNumber,
  isValidTaxId,
  onlyNumbers,
} from '@/helpers/utils';

export const NewCardPreApprovedLimitModal = ({
  onSave,
  isOpen,
  setOpen,
  isCreating,
}: {
  onSave: (cardPreApprovedLimit: CardPreApprovedLimit) => Promise<void>;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isCreating: boolean;
}) => {
  const { language } = useAppStore();
  const [value, setValue] = useState<string>('');
  const [taxId, setTaxId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const { openModal: openModal } = useModalContext();

  const handleOnSave = async () => {
    if (!taxId && taxId.length === 0) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.taxIdMustBeFilled);

      return;
    }

    if (!value && value.length === 0) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.valueMustBeFilled);

      return;
    }

    if (!isValidTaxId(taxId)) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.invalidTaxId);

      return;
    }

    const valueIsNumber = !isNaN(Number(value));
    if (!valueIsNumber) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.valueMustBeANumber);
      return;
    }

    if (phone.length && !isValidPhoneNumber(phone)) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.invalidPhoneNumber);

      return;
    }

    if (email.length && !isValidEmail(email)) {
      openModal(t(language).core.cardPreApprovedLimit.modal.form.errors.invalidEmail);

      return;
    }

    await onSave({
      value: Number(value),
      tax_id: onlyNumbers(taxId),
      type: getPersonTypeByDocument(taxId),
      name: name,
      email: email,
      phone: onlyNumbers(phone),
      comment: comment,
    });
  };

  const resetForm = () => {
    setValue('');
    setTaxId('');
  };

  const onCancel = () => {
    setOpen(false);
    resetForm();
  };

  return (
    <ErpModal
      open={isOpen}
      setOpen={setOpen}
      title={t(language).core.cardPreApprovedLimit.modal.newCardPreApprovedLimitTitle}
      className="max-w-[1200px] overflow-auto"
    >
      <div className="flex flex-col w-full">
        <div className="max-w-[1200px]">
          <div className="flex flex-row w-full gap-6 mb-4 ">
            <Input.ErpInput
              placeholder=""
              id="taxId"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.taxId + ' *'}
              onChange={setTaxId}
              value={taxId}
            />
            <Input.ErpInput
              placeholder=""
              id="value"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.value + ' *'}
              onChange={setValue}
              value={value}
            />
            <Input.ErpInput
              placeholder=""
              id="name"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.name}
              onChange={setName}
              value={name}
            />
          </div>

          <div className="flex flex-row w-full gap-6 mb-4 ">
            <Input.ErpInput
              placeholder=""
              id="email"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.email}
              onChange={setEmail}
              value={email}
            />
            <Input.ErpMaskedInput
              mask="(99) 99999-9999"
              placeholder=""
              id="phone"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.phone}
              onChange={setPhone}
              value={phone}
            />
          </div>

          <div className="flex flex-row w-full gap-6 mb-4">
            <Input.ErpTextArea
              placeholder=""
              id="comment"
              className="min-w-[200px]"
              label={t(language).core.cardPreApprovedLimit.modal.form.comment}
              onChange={setComment}
              value={comment}
            />
          </div>
        </div>

        <div className="flex flex-row w-full items-center justify-center gap-5 max-w-[1200px]">
          <Button onClick={handleOnSave} disabled={isCreating}>
            {isCreating
              ? 'Carregando'
              : t(language).core.cardPreApprovedLimit.modal.form.saveButton}
          </Button>
          <Button variant={'outline'} onClick={onCancel}>
            {t(language).core.cardPreApprovedLimit.modal.form.cancelButton}
          </Button>
        </div>
      </div>
    </ErpModal>
  );
};
