import React from "react";

export const Prim = ({ val, children, ...props }) => {
  const [key, value] =
    typeof children === "string"
      ? [children, children]
      : Object.entries(val)[0];

  return (
    <code {...props} data-gridid={key}>
      {value}
    </code>
  );
};
