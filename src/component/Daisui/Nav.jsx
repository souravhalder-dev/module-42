import React, { useState } from "react";
import Navber from "./Navber";
import { CircleX, Menu } from "lucide-react";
const Naver = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(true);
  const link = Naver.map((menu) => <Navber menu={menu}></Navber>);
  return (
    <div className=" flex justify-between mx-5 pt-5">
      <span onClick={() => setOpen(!open)} className="flex space-x-1  ">
        {open ? (
          <Menu className="md:hidden" />
        ) : (
          <CircleX className="md:hidden" />
        )}
        <ul
          className={`md:hidden bg-white absolute mt-6.5 ${
            open ? "-top-60" : "top-4"
          } `}
        >
          {link}
        </ul>
        <h3 className="ml-2">Sourav</h3>
      </span>
      {/* <ul className=" flex gap-5">
        <li>home</li>
        <li>about</li>
        <li>blog</li>
      </ul> */}
      <ul className=" md:flex gap-5 hidden">{link}</ul>
      <button className="btn">Click me</button>
    </div>
  );
};

export default Nav;
