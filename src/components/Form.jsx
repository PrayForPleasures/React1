export const Form = () => {
  const count = 1;
  const name = "Dm";
  return (
    <form>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button type="button" onClick={count}>
        click
      </button>
    </form>
  );
};
