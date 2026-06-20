const Button = ({ onClick }) => {
  return (
    <button type="button" className="button-load-more" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;