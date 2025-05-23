import React, { useEffect } from 'react';

const DisableCopyWrapper = ({ children }) => {
  useEffect(() => {
    const disableCopy = (e) => e.preventDefault();
    const disableContextMenu = (e) => e.preventDefault();
    const disableCut = (e) => e.preventDefault();

    document.addEventListener('copy', disableCopy);
    document.addEventListener('cut', disableCut);
    document.addEventListener('contextmenu', disableContextMenu);

    return () => {
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('cut', disableCut);
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  return <div>{children}</div>;
};

export default DisableCopyWrapper;