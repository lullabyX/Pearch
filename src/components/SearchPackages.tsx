import { useRef } from "react";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { searchRepositories } from "../store/action-creators/repositories";

const SearchPackages: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useTypedDispatch();

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    const searchText = inputRef.current!.value.trim();
    if (searchText.length === 0) {
      return;
    }
    dispatch(searchRepositories(searchText));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h1>Search Packages</h1>
      <input type="text" ref={inputRef} />
      <button>Search</button>
    </form>
  );
};

export default SearchPackages;
