import React, { useRef, useEffect, useCallback } from 'react';
import { DisableCopyWrapperProps } from '../types/DisableCopyWrapper.types';

const DisableCopyWrapper: React.FC<DisableCopyWrapperProps> = ({
  children,
  disableCopy = true,
  disableCut = true,
  disableContextMenu = true,
  showWarning = false,
  warningMessage = 'This action is disabled.',
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleEvent = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (showWarning) {
        alert(warningMessage);
      }
    },
    [showWarning, warningMessage]
  );

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    if (disableCopy) node.addEventListener('copy', handleEvent);
    if (disableCut) node.addEventListener('cut', handleEvent);
    if (disableContextMenu) node.addEventListener('contextmenu', handleEvent);

    return () => {
      if (disableCopy) node.removeEventListener('copy', handleEvent);
      if (disableCut) node.removeEventListener('cut', handleEvent);
      if (disableContextMenu) node.removeEventListener('contextmenu', handleEvent);
    };
  }, [disableCopy, disableCut, disableContextMenu, handleEvent]);

  return <div ref={wrapperRef} style={{ all: 'unset' }}>{children}</div>;
};

export default DisableCopyWrapper;
