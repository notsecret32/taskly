import { cn } from '@/utils';
import { X } from 'lucide-react';
import { FC, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  label?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  label,
  className,
  children,
  ...rest
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="bg-modal-overlay fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center">
      <div
        className={cn(
          'bg-background-secondary h-full max-h-[720px] w-full max-w-7xl rounded-lg border px-8 py-4',
          className
        )}
        {...rest}
      >
        <div className="flex items-center justify-between">
          {label && <h1>{label}</h1>}
          <X className="cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('#modal-wrapper')!
  );
};
