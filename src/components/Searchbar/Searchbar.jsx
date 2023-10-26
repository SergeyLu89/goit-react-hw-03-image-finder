// import css from './Searchbar.module.css';

export function Searchbar({ onSearchbarSubmit }) {
  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formQuery = form.elements.search.value.trim();
    onSearchbarSubmit(formQuery);

    form.reset();
  };
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onFormSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
