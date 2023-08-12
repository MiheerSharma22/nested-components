import React, { useState } from "react";
import TagView from "./TagView";

const TagTree = ({ setShowJson, setJsonTree }) => {
  const initialTree = {
    name: "root",
    data: "root Data",
  };

  const [tree, setTree] = useState(initialTree);

  const handleAddChild = (parent) => {
    const newChild = { name: "New Child", data: "Data" };

    // Create a new children array with the new child appended
    const newChildren = parent.children
      ? [...parent.children, newChild]
      : [newChild];

    // Update the parent's children with the new array
    parent.children = newChildren;

    setTree({ ...tree }); // Trigger re-render
  };

  const handleEditName = (tag, newName) => {
    tag.name = newName;
    setTree({ ...tree });
  };

  const handleEditData = (tag, newData) => {
    tag.data = newData;
    setTree({ ...tree });
  };

  return (
    <div className="w-[60%] mx-auto gap-10 flex flex-col items-center">
      <TagView
        tag={tree}
        onAddChild={handleAddChild}
        onEditName={handleEditName}
        onEditData={handleEditData}
      />
    </div>
  );
};

export default TagTree;
