import { genres, tags } from "../../constants";
import { useFilters } from "../../hooks/use-filters";
import { FilterOff, Search } from "../icons";

export const SearchFilters = () => {
  const {
    handleSearch,
    error,
    currentCategory,
    currentTitle,
    handleCategoryChange,
    resetFilters,
    formRef,
    selectRef,
  } = useFilters();

  return (
    <div className="max-w-sm space-y-4">
      <form
        ref={formRef}
        className="flex flex-col place-content-center items-center space-y-4"
        onSubmit={handleSearch}
      >
        <div className="flex w-full flex-col">
          <label
            className={`text-xs opacity-50 ${error ? "text-red-500" : ""}`}
            htmlFor="title"
          >
            Search by title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={currentTitle ?? ""}
            placeholder="Game of Thrones, Empire, etc."
            className={`rounded-xl border border-foreground/20 bg-background p-2 text-foreground transition-colors ease-in-out placeholder:text-sm focus:border-primary focus:outline-none ${error ? "border-red-500" : ""}`}
          />
          {error && (
            <span className="text-xs text-red-500">{error.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="flex w-full place-content-center items-center space-x-0.5 rounded-xl bg-button-primary p-2 text-button-primary-foreground"
        >
          <Search /> <span>Search</span>
        </button>
      </form>

      <div>
        <label className="text-xs opacity-50" htmlFor="category">
          Select a genre or a tag to filter
        </label>
        <select
          ref={selectRef}
          onChange={handleCategoryChange}
          defaultValue={currentCategory ?? "all"}
          className="w-full rounded-xl border border-foreground/20 bg-background p-2"
          name="category"
          id="category"
        >
          <option className="cursor-pointer hover:bg-primary" value="all">
            Select a category
          </option>
          <optgroup label="Genres">
            {genres.map((genre) => (
              <option
                key={genre}
                className="cursor-pointer hover:bg-primary"
                value={genre}
              >
                {genre}
              </option>
            ))}
          </optgroup>
          <optgroup label="Tags">
            {tags.map((tag) => (
              <option
                key={tag}
                className="cursor-pointer hover:bg-primary"
                value={tag}
              >
                {tag}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <button
        className="flex w-full place-content-center items-center space-x-0.5 rounded-xl border border-foreground/20 p-2"
        onClick={resetFilters}
      >
        <FilterOff />
        <span>Clear Filters</span>
      </button>
    </div>
  );
};
