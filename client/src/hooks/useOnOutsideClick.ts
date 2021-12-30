import { useRef, useEffect, MutableRefObject } from 'react';

// -------General functions --------
type AnyEvent = MouseEvent | TouchEvent;

const useOnOutsideClick = <T extends HTMLElement = HTMLElement>(handleOutsideClick: () => void) => {
  const innerBorderRef: MutableRefObject<T | any> = useRef();

  const onClick = (event: AnyEvent) => {
    if (innerBorderRef.current && !innerBorderRef.current.contains(event.target as Node)) {
      handleOutsideClick();
    }
  };

  useMountEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  });

  return { innerBorderRef };
};

// eslint-disable-next-line react-hooks/exhaustive-deps
const useMountEffect = (fun: any) => useEffect(fun, []);

export default useOnOutsideClick;
