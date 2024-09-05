import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Section = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'border border-ledgeraio-gray/30 w-full flex flex-row items-start px-4 py-4 rounded-lg',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
