import { useState } from "react";

interface Props {
  color: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroupTwo({ color, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-decoration-underline">{heading}</h1>
      <ul className="list-group">
        {color.map((color, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={color}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(color);
            }}
          >
            {color}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupTwo;
