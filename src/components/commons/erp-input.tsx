import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';
import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { DateRange } from 'react-day-picker';
import InputMask from 'react-input-mask';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '../ui/button';

export type InputProps = {
  id: string;
  handleOnChange: (value: string) => void;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Label = ({
  children,
  ...props
}: { children: React.ReactNode } & LabelHTMLAttributes<HTMLInputElement>) => {
  return (
    <label
      htmlFor={props.id}
      className={cn(
        ' text-sm font-medium text-gray-700 w-full mb-2 whitespace-nowrap',
        props.className,
      )}
    >
      {children}
    </label>
  );
};

export type MaskedInputProps = {
  label: string;
  id: string;
  handleOnChange: (value: string) => void;
  placeholder: string;
  isMasked: boolean;
  mask?: string;
  value?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const MaskedField = ({ className, handleOnChange, ...props }: MaskedInputProps) => {
  return (
    <InputMask
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={cn(
        'relative w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
        className,
      )}
      value={props.value}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      type="text"
      maskChar={null}
      id={props.id}
      mask={props.mask!}
    />
  );
};

const Field = ({ handleOnChange, className, ...props }: InputProps) => {
  return (
    <input
      type="text"
      disabled={props.disabled}
      className={cn(
        ' disabled:bg-gray-100 w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 pr-10 text-left shadow-sm hover:border-ledgeraio-gray/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm h-14',
        className,
      )}
      value={props.value}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      {...props}
    />
  );
};

type InpuContainerProps = HTMLAttributes<HTMLDivElement>;

const Input = ({ children, className, ...props }: InpuContainerProps) => {
  return (
    <div
      className={cn(' flex items-start justify-start gap-0 flex-col w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
};

const SelectField = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SelectTrigger
      className={cn(
        ' disabled:bg-gray-100 w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 text-left shadow-sm hover:border-ledgeraio-gray/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm h-14 min-w-[140px]',
        className,
      )}
    >
      {children}
    </SelectTrigger>
  );
};
const ErpSelect = ({
  label,
  placeholder,
  value,
  onValueChange,
  items,
  className,
  disabled,
}: {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  value: string;
  onValueChange: (value: string) => void;
  items: {
    label: string;
    value: string;
  }[];
}) => {
  return (
    <Input>
      <Input.Label>{label}</Input.Label>

      <Select onValueChange={onValueChange} value={value} disabled={disabled}>
        <Input.SelectField className={cn('h-10 min-w-[300px]', className)}>
          <SelectValue defaultValue={value} placeholder={placeholder}></SelectValue>
        </Input.SelectField>
        <SelectContent>
          {items.map((item) => (
            <SelectItem
              key={item.value}
              className="hover:bg-gray-200 cursor-pointer"
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Input>
  );
};

const ErpInput = ({
  label,
  id,
  onChange,
  placeholder,
  value: propValue,
  className,
  disabled,
  validationSchema,
  type,
  onError,
  error,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
  className?: string;
  id: string;
  disabled?: boolean;
  validationSchema?: z.ZodType<any, any>;
  onError?: (id: string, isError: boolean) => void;
  type?: HTMLInputTypeAttribute;
  error?: string;
}) => {
  useEffect(() => {
    if (propValue !== null && propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const [internalError, setInternalError] = useState<string | null | undefined>(error); // State to hold error message
  const [value, setValue] = useState(propValue || ''); // Initialize state with propValue or empty string

  return (
    <Input>
      <Input.Label htmlFor={id}>{label}</Input.Label>
      <Field
        disabled={disabled}
        handleOnChange={(e) => {
          setValue(e);
          if (validationSchema) {
            try {
              validationSchema.parse({ [id]: e });
              onChange(e);
              setInternalError(null);
              if (onError) onError(id, false);
            } catch (err) {
              if (err instanceof z.ZodError) {
                const errorMessage = err.errors.map((e) => e.message).join(', ');

                setInternalError(errorMessage);
                if (onError) onError(id, true);
              }
            }
            return;
          }
          onChange(e);
        }}
        placeholder={placeholder}
        className={cn('h-10 min-w-[200px]', className)}
        type={type}
        id={id}
        value={value}
      />
      {internalError && <div className="text-red-500 text-sm mt-1">{error}</div>}{' '}
    </Input>
  );
};

const ErpTextArea = ({
  label,
  id,
  onChange,
  placeholder,
  value: propValue,
  className,
  disabled,
  validationSchema,
  // type,
  onError,
  error,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
  className?: string;
  id: string;
  disabled?: boolean;
  validationSchema?: z.ZodType<any, any>;
  onError?: (id: string, isError: boolean) => void;
  type?: HTMLInputTypeAttribute;
  error?: string;
}) => {
  useEffect(() => {
    if (propValue !== null && propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const [internalError, setInternalError] = useState<string | undefined | null>(error); // State to hold error message
  const [value, setValue] = useState(propValue || ''); // Initialize state with propValue or empty string

  return (
    <Input>
      <Input.Label htmlFor={id}>{label}</Input.Label>
      <textarea
        disabled={disabled}
        onChange={(ee) => {
          const e = ee.target.value;
          setValue(e);
          if (validationSchema) {
            try {
              validationSchema.parse({ [id]: e });
              onChange(e);
              setInternalError(null);
              if (onError) onError(id, false);
            } catch (err) {
              if (err instanceof z.ZodError) {
                const errorMessage = err.errors.map((e) => e.message).join(', ');

                setInternalError(errorMessage);
                if (onError) onError(id, true);
              }
            }
            return;
          }
          onChange(e);
        }}
        placeholder={placeholder}
        id={id}
        value={value}
        className={cn(
          'h-10 min-w-[200px] disabled:bg-gray-100 w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 pr-10 text-left shadow-sm hover:border-ledgeraio-gray/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm h-14',
          className,
        )}
      />
      {internalError && <div className="text-red-500 text-sm mt-1">{error}</div>}{' '}
    </Input>
  );
};

const ErpMaskedInput = ({
  label,
  id,
  onChange,
  placeholder,
  value,
  className,
  disabled,
  mask,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
  className?: string;
  id: string;
  disabled?: boolean;
  mask: string;
}) => {
  return (
    <Input>
      <Input.Label htmlFor={id}>{label}</Input.Label>
      <MaskedField
        disabled={disabled}
        handleOnChange={onChange}
        isMasked
        mask={mask}
        label=""
        placeholder={placeholder}
        className={cn('h-10 min-w-[200px]', className)}
        id={id}
        value={value}
      />
    </Input>
  );
};

const ErpDateRangeInput = ({
  onSelect,
  value,
  label,
  toDate,
}: {
  onSelect: (date: DateRange) => void;
  value: DateRange;
  label: string;
  toDate?: Date;
}) => {
  return (
    <Input>
      <Input.Label>{label}</Input.Label>
      <ErpDateRangePicker toDate={toDate} onHandleSelect={onSelect} value={value} />
    </Input>
  );
};

function ErpDateRangePicker({
  className,
  onHandleSelect: onSelect,
  value,
  toDate,
}: {
  onHandleSelect: (date: DateRange) => void;
  value: DateRange;
  toDate?: Date;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>(value);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              ' disabled:bg-gray-100 w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 pr-3 text-left shadow-sm hover:border-ledgeraio-gray/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm  h-10 min-w-[250px]',
              `${className} ${!date && 'text-muted-foreground'}`,
            )}
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-2 h-4 w-4 self-right" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            toDate={toDate}
            defaultMonth={date?.from}
            selected={date}
            onSelect={(date) => {
              setDate(date);
              if (date) {
                onSelect(date);
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

function ErpDatePicker({
  className,
  onHandleSelect: onSelect,
  value,
  toDate,
}: {
  onHandleSelect: (date: Date) => void;
  value: Date;
  toDate?: Date;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<Date | undefined>(value);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              ' disabled:bg-gray-100 w-full rounded-md border border-ledgeraio-gray/30 bg-white py-2 pl-3 pr-3 text-left shadow-sm hover:border-ledgeraio-gray/50 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 sm:text-sm  h-10 min-w-[250px] justify-between',
              `${className} ${!date && 'text-muted-foreground'}`,
            )}
          >
            {date && format(date, 'LLL dd, y')}
            <CalendarIcon className="ml-2 h-4 w-4 self-right" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="single"
            onSelect={(date) => {
              setDate(date);
              if (date) {
                onSelect(date);
              }
            }}
            toDate={toDate}
            defaultMonth={date}
            selected={date}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

const ErpDatePickerInput = ({
  onSelect,
  value,
  label,
  toDate,
  className,
}: {
  onSelect: (date: Date) => void;
  value: Date;
  label: string;
  toDate?: Date;
  className?: string;
}) => {
  return (
    <Input>
      <Input.Label>{label}</Input.Label>
      <ErpDatePicker
        toDate={toDate}
        onHandleSelect={onSelect}
        value={value}
        className={className}
      />
    </Input>
  );
};
Input.ErpSelect = ErpSelect;

Input.Field = Field;

Input.SelectField = SelectField;
Input.MaskedField = MaskedField;

Input.Label = Label;
Input.ErpInput = ErpInput;
Input.ErpTextArea = ErpTextArea;

Input.ErpMaskedInput = ErpMaskedInput;
Input.ErpDateRangeInput = ErpDateRangeInput;
Input.ErpDatePickerInput = ErpDatePickerInput;

export default Input;
