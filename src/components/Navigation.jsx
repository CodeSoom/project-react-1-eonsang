import React from "react";

import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

import {
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Container = styled.nav``;

export default function Navigation() {
  return (
    <>
      <Container>
        <NavLink to={"/"}>
          <span hidden>일기장</span>
          <AiOutlineBook />
        </NavLink>
        <NavLink to={"/"}>
          <span hidden>캘린더</span>
          <AiOutlineCalendar />
        </NavLink>
        <NavLink to={"/"}>
          <span hidden>글쓰기</span>
          <BsPencil />
        </NavLink>
        <NavLink to={"/"}>
          <span hidden>지도</span>
          <FiMapPin />
        </NavLink>
        <NavLink to={"/"}>
          <span hidden>마이페이지</span>
          <AiOutlineUser />
        </NavLink>
      </Container>
    </>
  );
}
