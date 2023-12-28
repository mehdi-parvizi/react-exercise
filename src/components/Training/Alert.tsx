interface Props {
  children: string;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <>
      <div
        className="alert alert-primary alert-dismissible show fade"
        role="alert"
      >
        {children}
        <button
          aria-label="Close"
          type="button"
          className="btn-close alert-dismissible"
          data-bs-dismiss="alert"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

export default Alert;
