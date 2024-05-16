import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" style={{ marginTop: "20px" }}>
      <ol class="breadcrumb">
        {items.map((item) =>
          item.active == true ? (
            <li class="breadcrumb-item active" aria-current="page">
              {item.title}
            </li>
          ) : (
            <li class="breadcrumb-item">
              <NavLink
                style={{ display: "inline-flex", alignItems: "center" }}
                to={item.link}
              >
                <Icon type={item.title} />
                {item.title}
              </NavLink>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
