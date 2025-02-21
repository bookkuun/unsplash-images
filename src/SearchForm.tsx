import { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext() as {
    setSearchTerm: Dispatch<SetStateAction<string>>;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;

    if (!searchValue || !searchValue.value) return;
    setSearchTerm(searchValue.value);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
