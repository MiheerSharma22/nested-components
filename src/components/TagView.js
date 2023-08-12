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
    <div>
      <div>
        <button onClick={handleToggleCollapse}>{collapsed ? ">" : "v"}</button>
        <input type="text" value={tag.name} onChange={onEditName} />
        <input type="text" value={tag.data} onChange={onEditData} />
        <button onClick={onAddChild}>Add Child</button>
      </div>
      {renderChildren(tag.children || [])}
    </div>
  );
};

export default TagView;
