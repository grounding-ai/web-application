import { useEffect, useState } from "react";

export function useIsMounted(delay = 0) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!delay) {
      setIsMounted(true);
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMounted;
}
