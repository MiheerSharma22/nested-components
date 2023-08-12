import React, { useState } from "react";

const TagView = ({ tag, onAddChild, onEditName, onEditData }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderChildren = (children) => {
    return (
      <ul>
        {children.map((child, index) => (
          <li key={index}>
            <TagView
              tag={child}
              onAddChild={onAddChild}
              onEditName={onEditName}
              onEditData={onEditData}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className=" w-full mt-2 bg-gray-200 border-2 border-blue-400">
      {/* header */}
      <div className="px-1 py-1 bg-blue-400 flex items-center justify-between">
        {/* left */}
        <div className="flex ">
          {/* collapse button */}
          <button
            onClick={handleToggleCollapse}
            className="rounded-sm mr-2 px-[1.3rem] py-[0.3rem] flex items-center bg-gray-100 "
          >
            {collapsed ? ">" : "v"}
          </button>

          {/* tag name */}
          <input
            type="text"
            value={tag.name}
            className="bg-transparent font-semibold"
            onChange={(event) => onEditName(tag, event.target.value)}
          />
        </div>

        {/* right */}
        {/* add child button */}
        <button
          onClick={() => onAddChild(tag)}
          className="rounded-sm px-[1.3rem] py-[0.3rem] flex items-center bg-gray-100 "
        >
          Add Child
        </button>
      </div>

      {/* data / children container */}
      {/* if not collapsed then show the window */}
      {!collapsed && (
        <div className="p-3 pr-0 flex flex-col gap-2">
          {/* if current tag has no children then show its data else render its children */}
          {!tag.children ? (
            <span className="flex items-center gap-2">
              <p>Data</p>
              <input
                type="text"
                className="border border-gray-500 rounded-sm px-[0.3rem] py-[0.3rem]"
                value={tag.data}
                onChange={(event) => onEditData(tag, event.target.value)}
              />
            </span>
          ) : (
            !collapsed && renderChildren(tag.children || [])
          )}
        </div>
      )}
    </div>
  );
};

export default TagView;
