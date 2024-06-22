import { useLocation, useNavigate } from "@tanstack/react-router";
import { ChangeEvent, useRef, useState } from "react";

type ErrorForm = {
  message: string;
};

export const useFilters = () => {
  const [error, setError] = useState<ErrorForm | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const currentTitle = location.search.title;
  const currentCategory = location.search.category ?? "all";

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
