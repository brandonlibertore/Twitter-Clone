import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebar__option ${active && "sidebar__option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}
