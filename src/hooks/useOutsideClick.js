import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler, listenCapturing]
  );
  return ref
}
