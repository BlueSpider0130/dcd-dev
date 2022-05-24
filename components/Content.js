import React from "react";
import ContentsItem from "./ContentsItem";
import Button from "./statics/Button";

function Content({ items }) {
  if (!items) items = [];
  return (
    <div>
      {items.map((item, index) => {
        // console.log("=== item", item);
        return (
          <ContentsItem
            key={item.name}
            item={item}
            index={index}
          ></ContentsItem>
        );
      })}
    </div>
  );
}

export default Content;
