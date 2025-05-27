import React from 'react';

export interface DisableCopyWrapperProps {
  children: React.ReactNode;
  disableCopy?: boolean;
  disableCut?: boolean;
  disableContextMenu?: boolean;
  showWarning?: boolean;
  warningMessage?: string;
  onWarn?: () => void; 
  isScoped?: boolean;
  wrapperClassName?: string;
}
