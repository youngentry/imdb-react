import React from "react";

const PreventedAnchor = ({ children }) => {
  const preventLink = (e) => {
    e.preventDefault();
  };
  return (
    <a href="/" onClick={preventLink}>
      {children}
    </a>
  );
};

export default PreventedAnchor;
