"use client";

import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="px-[30px] py-[30px]">
      <div className="flex items-center justify-between">
        <div>LOGO</div>
        <ul className="flex items-center list-none m-0 p-0 gap-[15px] text-[13px]">
          <li className="cursor-pointer">
            <span className="navbar-hover-underline">Product ✨</span>
          </li>
          <li className="cursor-pointer">
            {" "}
            <span className="navbar-hover-underline">Pricing</span>
          </li>
          <li className="cursor-pointer">
            <span className="navbar-hover-underline">Integration</span>
          </li>
          <li className="cursor-pointer">
            {" "}
            <span className="navbar-hover-underline">Resources</span>
          </li>
        </ul>
        <div className="flex gap-[12px]">
          <Button variant={"secondary"} size={"sm"} className="cursor-pointer">
            Sign In
          </Button>
          <Button variant={"default"} size={"sm"} className="cursor-pointer">
            Get Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
