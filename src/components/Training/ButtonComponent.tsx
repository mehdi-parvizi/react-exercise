interface Props {
  children: string;
  color?: `primary` | `danger` | `success`;
  onClick: () => void;
}

function MyButton({ children, onClick, color = "danger" }: Props) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-` + color}
        style={{ marginLeft: `10px` }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
export default MyButton;
