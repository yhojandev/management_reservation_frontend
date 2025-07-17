import { useCallback, useRef, useState, useEffect } from "react";
import { createPopper, type Placement } from "@popperjs/core";

export const useDropdown = (placement: Placement = "bottom-start") => {
  const referenceRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const popperInstance = useRef<ReturnType<typeof createPopper> | null>(null);

  const open = useCallback(() => {
    if (referenceRef.current && dropdownRef.current) {
      popperInstance.current = createPopper(
        referenceRef.current,
        dropdownRef.current,
        {
          placement,
        }
      );
      setIsOpen(true);
    }
  }, [placement]);

  const close = useCallback(() => {
    popperInstance.current?.destroy();
    popperInstance.current = null;
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  // Cierre automático al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        referenceRef.current &&
        dropdownRef.current &&
        !referenceRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);

  return {
    isOpen,
    referenceRef,
    dropdownRef,
    toggle,
  };
};
