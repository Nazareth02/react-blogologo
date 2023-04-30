import { SearchBtn, SearchIcon } from "assets";
import { useClickOutside, useDebounce, useInput, useToggle } from "hooks";
import { FormEvent, memo, useCallback, useEffect, useRef } from "react";
import { SearchInput, SearchInputWrapper, StyledSearchForm, SubmitSearchButton } from "./styles";
import { ROUTES } from "routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { setSearchValue } from "store/features/blogsSlice/blogsSlice";

interface SearchProps {
  onClick: () => void;
}

export const Search = memo(({ onClick }: SearchProps) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isToggledSearch, setToggleSearch] = useToggle();
  const { reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const searchValue = useInput("");
  const debouncedValue = useDebounce(searchValue.value, 1000);

  useClickOutside(inputRef, () => setToggleSearch());

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setToggleSearch();
      navigate(ROUTES.SEARCH);
      onClick();
      reset();
    },
    [navigate, reset, setToggleSearch, onClick],
  );
  const handleSearchButton = useCallback(
    (event: FormEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(ROUTES.SEARCH);
      onClick();
      reset();
    },
    [navigate, reset, onClick],
  );

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [dispatch, debouncedValue]);

  return isToggledSearch ? (
    <StyledSearchForm onSubmit={handleSearch}>
      <SearchInputWrapper ref={inputRef}>
        <SearchInput
          placeholder="Search for ..."
          {...searchValue}
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
