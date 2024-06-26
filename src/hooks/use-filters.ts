import { useLocation, useNavigate } from "@tanstack/react-router";
import { ChangeEvent, useRef, useState } from "react";

type ErrorForm = {
  message: string;
};

/**
 * Hook for managing filter states and handling filter-related actions such as searching and resetting filters.
 *
 * @returns An object containing:
 * - `handleSearch`: A function to handle search submissions. Validates input and updates the URL search parameters accordingly.
 * - `handleCategoryChange`: A function to update the category filter based on user selection and reflect this change in the URL.
 * - `error`: An object containing error messages related to form validation, if any.
 * - `currentTitle`: The current search title from the URL search parameters.
 * - `currentCategory`: The current category filter from the URL search parameters, defaults to "all".
 * - `resetFilters`: A function to reset all filters to their initial state and clear the URL search parameters.
 * - `selectRef`: A reference to a select element to reset values on resetFilters().
 * - `formRef`: A reference to a form element to reset values on resetFilters().
 */

export const useFilters = () => {
  const [error, setError] = useState<ErrorForm | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const currentTitle = location.search.title;
  const currentCategory = location.search.category?.toLowerCase() ?? "all";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const data = new FormData(e.currentTarget);
    const title = data.get("title");

    // Dummy Validation

    if (typeof title !== "string" || title.length < 1) {
      setError({ message: "You must to provide a title" });
      return;
    }

    let options;

    if (currentCategory === "all") {
      options = { search: { title } };
    } else {
      options = { search: { title, category: currentCategory } };
    }

    navigate({ from: location.pathname, to: "/search", ...options });
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    let options;

    if (currentTitle) {
      options = { search: { title: currentTitle, category } };
    } else {
      options = { search: { category } };
    }

    navigate({
      from: location.pathname,
      to: "/search",
      ...options,
    });
  };

  const resetFilters = () => {
    navigate({ from: location.pathname, to: "/search" });
    formRef.current?.reset();
    if (selectRef.current) {
      selectRef.current.value = "all";
    }
  };

  return {
    handleSearch,
    handleCategoryChange,
    error,
    currentTitle,
    currentCategory,
    resetFilters,
    formRef,
    selectRef,
  };
};
