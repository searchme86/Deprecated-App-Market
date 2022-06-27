import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      //ref가 지정된 dom 외부를 표현함
      // const handleClickOutside = (event) => {
      //       if (ref.current && !ref.current.contains(event.target)) {
      //         onClickOutside && onClickOutside();
      //       }
      //     };

      const el = ref?.current;
      //ref가 지정된 dom일 경우를 표현함
      //00이 가능하려면, 00의 반대의 경우를 생각함
      //[[돔] 외부]를 클릭하는 것에 대한 반대 경우일 경우 return 시킨다.
      //=> 클릭할 돔 자체가 없는 경우,
      //=> 돔 내부(현재 돔)에 이벤트가 발생했거나
      if (!el || el.contains(event?.target || null)) {
        return;
      }
      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
