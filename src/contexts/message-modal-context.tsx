import { createContext, useCallback, useContext, useState } from 'react';
import { ErpModal } from '@/components/commons/modals/erp-modal';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/languages/language';
import { useAppStore } from '@/store/app-store';

export interface MessageModalContextState {
  content: React.ReactNode;
  isOpen: boolean;
  openModal: (message: string) => void;
  openWithContent: (content: React.ReactNode) => void;
  close: () => void;
}

export const MessageModalContext = createContext<MessageModalContextState>({
  content: null,
  isOpen: false,
  openModal: () => {},
  openWithContent: () => {},
  close: () => {},
});

const ContentModal = ({
  content,
  isOpen,
  setOpen,
}: {
  content: React.ReactNode;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { language } = useAppStore();
  return (
    <ErpModal open={isOpen} setOpen={setOpen} title={t(language).modal.message.title}>
      <div className="flex flex-col items-center gap-5">
        {content}
        <Button onClick={() => setOpen(false)} className="min-w-[200px] font-bold">
          {t(language).modal.message.ok.toUpperCase()}
        </Button>
      </div>
    </ErpModal>
  );
};
export const MessageModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = useCallback((message: string) => {
    setContent(<p>{message}</p>);
    setIsOpen(true);
  }, []);

  const close = () => {
    setContent(null);
    setIsOpen(false);
  };

  const openWithContent = (content: React.ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  return (
    <MessageModalContext.Provider
      value={{ isOpen, openModal: openModal, close, openWithContent, content }}
    >
      <ContentModal isOpen={isOpen} content={content} setOpen={setIsOpen} />
      {children}
    </MessageModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(MessageModalContext);
};
