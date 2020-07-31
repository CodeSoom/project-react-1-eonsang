import React from "react";

import styled from "@emotion/styled";

import {
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

import NavigationItem from "./NavigationItem";

const Navi = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
`;

export default function Navigation() {
  const links = [
    {
      link: "/",
      title: "일기장",
      icon: <AiOutlineBook />,
      exact: true,
    },
    {
      link: "/calendar",
      title: "캘린더",
      icon: <AiOutlineCalendar />,
      exact: false,
    },
    {
      link: "/write",
      title: "글쓰기",
      icon: <BsPencil />,
      exact: false,
    },
    {
      link: "/map",
      title: "지도",
      icon: <FiMapPin />,
      exact: false,
    },
    {
      link: "/mypage",
      title: "마이페이지",
      icon: <AiOutlineUser />,
      exact: false,
    },
  ];
  return (
    <>
      <Navi>
        {links.map((data) => {
          return <NavigationItem key={data.title} data={data} />;
        })}
      </Navi>
    </>
  );
}
