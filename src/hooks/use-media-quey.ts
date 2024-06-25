import { useEffect, useState } from "react";

/**
 * Hook that listens to a specified CSS media query and returns its current matching state.
 *
 * @param query - The CSS media query string to listen for changes.
 * @returns A boolean indicating whether the current window matches the specified media query.
 */

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}
