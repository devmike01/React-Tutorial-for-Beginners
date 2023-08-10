import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {
          // If left is true, right would be shown automatically
          items.length == 0 && <p>No content</p>
        }
        {items.map((item, index) => (
          // The key should be unique
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
                handleClick(index);
                onSelectItem(item);
                
                }} >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
