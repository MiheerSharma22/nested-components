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

    // deleting data property of parent
    delete parent.data;

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

  const handleExport = async () => {
    setShowJson(true);
    setJsonTree("");
    setJsonTree(tree);
  };

  return (
    <div className="w-[60%] mx-auto gap-10 flex flex-col items-center">
      <TagView
        tag={tree}
        onAddChild={handleAddChild}
        onEditName={handleEditName}
        onEditData={handleEditData}
      />
      {/* export button */}
      <button
        className="place-self-start mb-2 px-[1.3rem] py-[0.3rem] flex items-center bg-gray-300 hover:bg-gray-200 rounded-md border border-gray-200 transition-all duration-150"
        onClick={handleExport}
      >
        Export
      </button>
    </div>
  );
};

export default TagTree;
