"use client";

import { LoginForm } from "../auth/LoginForm";
import { RegisterForm } from "../auth/RegisterForm";

const Navbar = () => {
  return (
    <nav className="px-[30px] py-[30px]">
      <div className="flex items-center justify-between">
        <div className="text-[40px] cursor-default">👾</div>
        <ul className="flex items-center list-none m-0 p-0 gap-[30px]">
          <li className="cursor-pointer">
            <span className="navbar-hover-underline">Product ✨</span>
          </li>
          <li className="cursor-pointer">
            {" "}
            <span className="navbar-hover-underline">Pricing</span>
          </li>
          <li className="cursor-pointer">
            {" "}
            <span className="navbar-hover-underline">Resources</span>
          </li>
        </ul>
        <div className="flex gap-[12px] items-center">
          <LoginForm size="sm" />
          <RegisterForm size="sm" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
