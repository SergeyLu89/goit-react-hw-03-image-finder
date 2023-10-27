import css from './Button.module.css';
export const Button = ({ onLoadMoreBtn }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onLoadMoreBtn}>
      Load more
    </button>
  );
};
