import { useState } from "react";

const DeleteButton = ({
  text = "Delete",
  confirmText = "Confirm Delete",
  onClick = () => {
    alert("clicked!");
  },
}) => {
  const [isArmed, setIsArmed] = useState(false);

  const handleClick = () => {
    if (isArmed) {
      onClick();
    } else {
      setIsArmed(true);
    }
  };
  const handleCancel = () => {
    setIsArmed(false);
  };

  return (
    <div>
      <button
        className={`btn ${isArmed ? "btn-danger" : "btn-outline-danger"}`}
        onClick={handleClick}
      >
        {isArmed ? confirmText : text}
      </button>
      {isArmed && (
        <button onClick={handleCancel} className="btn">
          cancel
        </button>
      )}
    </div>
  );
};
export default DeleteButton;
