import { useDialog } from "./useDialog";
import {
  useContext,
  createContext,
  ReactNode,
  forwardRef,
  RefObject,
  HTMLProps,
  MouseEvent,
} from "react";
import "./dialog.css";
import "./custom-dialog.css";

type DialogContextType = {
  ref: RefObject<HTMLDialogElement> | null;
  handleOpen: () => void;
  handleClose: () => void;
};

const DialogContext = createContext<DialogContextType>({
  ref: null,
  handleOpen: () => null,
  handleClose: () => null,
});

interface ChildrenProp {
  children: ReactNode;
}

const DialogRoot = ({ children }: ChildrenProp) => {
  const [ref, { handleOpen, handleClose }] = useDialog();

  return (
    <DialogContext.Provider value={{ ref, handleOpen, handleClose }}>
      {children}
    </DialogContext.Provider>
  );
};
const DialogContent = forwardRef<
  HTMLDialogElement,
  HTMLProps<HTMLDialogElement>
>(({ children, className = "", ...restProps }, forwardedRef) => {
  const { ref } = useContext(DialogContext);
  return (
    <dialog
      ref={ref || forwardedRef}
      className={"dialogWrapper " + className}
      {...restProps}
    >
      {children}
    </dialog>
  );
});

type DialogBtnType = HTMLProps<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
};

const DialogTrigger = forwardRef<HTMLButtonElement, DialogBtnType>(
  ({ children, onClick, ...restProps }, forwardedRef) => {
    const { handleOpen } = useContext(DialogContext);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      handleOpen();
      if (typeof onClick === "function") onClick(e);
    };

    return (
      <button ref={forwardedRef} onClick={handleClick} {...restProps}>
        {children}
      </button>
    );
  }
);

const DialogClose = forwardRef<HTMLButtonElement, DialogBtnType>(
  ({ children, onClick, ...restProps }, forwardedRef) => {
    const { handleClose } = useContext(DialogContext);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      handleClose();
      if (typeof onClick === "function") onClick(e);
    };

    return (
      <button ref={forwardedRef} onClick={handleClick} {...restProps}>
        {children}
      </button>
    );
  }
);

const DialogHeader = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & { withClose?: boolean }
>(
  (
    { children, className = "", withClose = true, ...restProps },
    forwardedRef
  ) => {
    return (
      <header
        className={"header " + className}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
        {withClose && <DialogClose className="closeIcon">&times;</DialogClose>}
      </header>
    );
  }
);

const DialogBody = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, className = "", ...restProps }, forwardedRef) => {
    return (
      <article
        className={"body " + className}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </article>
    );
  }
);

const DialogFooter = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ children, className = "", ...restProps }, forwardedRef) => {
    return (
      <footer
        className={"footer " + className}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </footer>
    );
  }
);

export const Modal = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
};
