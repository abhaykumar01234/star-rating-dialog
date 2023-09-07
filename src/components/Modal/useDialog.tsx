import { useRef, useEffect, RefObject } from "react";

type useDialogType = [
  RefObject<HTMLDialogElement>,
  { handleOpen: () => void; handleClose: () => void }
];

export const useDialog = (): useDialogType => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!dialogRef.current) return;
      const dialogDimensions = dialogRef.current.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      )
        handleClose();
    };

    dialogRef.current.addEventListener("click", handleClickOutside);

    const dialog = dialogRef.current;
    return () => dialog.removeEventListener("click", handleClickOutside);
  }, []);

  const handleOpen = () => {
    if (!dialogRef.current) return;
    dialogRef.current.showModal();
    dialogRef.current.setAttribute("data-state", "opened");
    document.body.style.overflowY = "hidden";
  };

  const handleClose = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
    dialogRef.current.setAttribute("data-state", "closed");
    document.body.style.overflowY = "auto";
  };

  return [dialogRef, { handleOpen, handleClose }];
};
