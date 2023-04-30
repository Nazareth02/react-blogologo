import { SearchBtn, SearchIcon } from "assets";
import { useClickOutside, useToggle } from "hooks";
import { FormEvent, memo, useRef } from "react";
import { SearchInput, SearchInputWrapper, StyledSearchForm, SubmitSearchButton } from "./styles";
import { ROUTES } from "routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Search = memo(() => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isToggledSearch, setToggleSearch] = useToggle();
  const { reset } = useForm();
  const navigate = useNavigate();

  useClickOutside(inputRef, () => setToggleSearch());

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToggleSearch();
    navigate(ROUTES.SEARCH);
    reset();
  };
  const handleSearchButton = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(ROUTES.SEARCH);
    reset();
  };

  return isToggledSearch ? (
    <StyledSearchForm onSubmit={handleSearch}>
      <SearchInputWrapper ref={inputRef}>
        <SearchInput
          initial={{ x: "+50%" }}
          animate={{ x: 0 }}
          transition={{
            type: "tween",
            stiffness: 300,
            damping: 15,
          }}
        />
        <SubmitSearchButton type="submit" onSubmit={handleSearchButton}>
          <SearchBtn />
        </SubmitSearchButton>
      </SearchInputWrapper>
    </StyledSearchForm>
  ) : (
    <SearchIcon onClick={setToggleSearch} />
  );
});
