import css from './Searchbar.module.css';

export function Searchbar({ onSearchbarSubmit }) {
  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formQuery = form.elements.search.value.trim();
    onSearchbarSubmit(formQuery);

    form.reset();
  };
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onFormSubmit}>
        <button type="submit" className={css.submitBtn}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          name="search"
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
