import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ routes }) => {
  return (
    <ul className="navbar">
      {routes.map((route, index) => {
        return (
          <li key={index}>
            <NavLink
              strict={route?.strict}
              exact={route?.link === "/" ? true : false}
              activeClassName="active"
              to={route.link}
            >
              {route.name} {route.icon && <route.icon />}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
