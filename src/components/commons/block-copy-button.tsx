import * as React from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';

import { Button, ButtonProps } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { t } from '@/lib/languages/language';
import { useAppStore } from '@/store/app-store';

export function BlockCopyButton({
  name,
  code,
  ...props
}: {
  name: string;
  code: string;
} & ButtonProps) {
  const { language } = useAppStore();
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-[6px] [&_svg]:size-3.5"
            onClick={() => {
              navigator.clipboard.writeText(code);
              setHasCopied(true);
            }}
            {...props}
          >
            <span className="sr-only">{t(language).buttons.copy}</span>
            {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{t(language).buttons.copy}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
