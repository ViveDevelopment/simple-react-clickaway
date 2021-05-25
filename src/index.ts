import { RefObject, useEffect, useState } from 'react';

type ClickAwayListener = {
  disable: () => void;
  enable: () => void;
};

export const useClickAway = (ref: RefObject<HTMLDivElement>, onClickAway: () => void): ClickAwayListener => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const disable = () => setDisabled(true);
  const enable = () => setDisabled(false);
  const onAway = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Element)) onClickAway();
  };
  useEffect(() => {
    if (!ref || !ref.current) return;
    if (disabled)
      document.removeEventListener('mousedown', onAway);
    else
      document.addEventListener('mousedown', onAway);
    return () => document.removeEventListener('mousedown', onAway);
  }, [ref.current, disabled]);
  return { disable, enable };
};
