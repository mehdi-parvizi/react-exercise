import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, statusUpdate] = useState(!false);
  const toggle = () => {
    statusUpdate(!status);
    onClick();
  };
  if (status) return <FaHeart size={20} color={`#ff6b81`} onClick={toggle} />;
  return <FaRegHeart onClick={toggle} size={20} color={`#ff6b81`} />;
}

export default Like;
