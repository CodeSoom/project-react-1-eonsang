import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 60px;
  font-size: 20px;
  color: #999;
`;

export default function NavigationItem({ data }) {
  const { link, title, icon, exact } = data;
  return (
    <Link
      to={link}
      activeStyle={{
        color: "#333",
      }}
      exact={exact}
    >
      <span hidden>{title}</span>
      {icon}
    </Link>
  );
}

NavigationItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};
