import React, { useRef, useEffect, useCallback } from 'react';
import { DisableCopyWrapperProps } from '../types/DisableCopyWrapper.types';

const DisableCopyWrapper: React.FC<DisableCopyWrapperProps> = ({
  children,
  disableCopy = true,
  disableCut = true,
  disableContextMenu = true,
  showWarning = false,
  warningMessage = 'This action is disabled.',
  onWarn,
  isScoped = false,
  wrapperClassName,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleEvent = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (showWarning) {
        if (onWarn) {
          onWarn();
        } else {
          alert(warningMessage);
        }
      }
    },
    [showWarning, warningMessage, onWarn]
  );

  useEffect(() => {
    const target: HTMLElement | Document = isScoped ? wrapperRef.current! : document;
    if (!target) return;

    if (disableCopy) target.addEventListener('copy', handleEvent);
    if (disableCut) target.addEventListener('cut', handleEvent);
    if (disableContextMenu) target.addEventListener('contextmenu', handleEvent);

    return () => {
      if (disableCopy) target.removeEventListener('copy', handleEvent);
      if (disableCut) target.removeEventListener('cut', handleEvent);
      if (disableContextMenu) target.removeEventListener('contextmenu', handleEvent);
    };
  }, [isScoped, disableCopy, disableCut, disableContextMenu, handleEvent]);

  return isScoped ? (
    <div ref={wrapperRef} className={wrapperClassName}>
      {children}
    </div>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default DisableCopyWrapper;
