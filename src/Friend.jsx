import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li
      onClick={() => onSelection(friend)}
      className={isSelected ? "selected" : ""}
    >
      <img src={friend.image} alt={friend.name} />
      <h4>{friend.name}</h4>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
};

export default Friend;
