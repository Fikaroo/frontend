import React from "react";
import { Avatar, Button, Navbar } from "flowbite-react";

export const logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 mr-3 sm:h-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
    />
  </svg>
);
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

type NavbarComponentProps = {
  isActive?: boolean;
};

const NavbarComponent = ({ isActive = false }: NavbarComponentProps) => {
  return (
    <Navbar className="!bg-transparent" fluid={true}>
      <Navbar.Brand href="/">
        {logo()}
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Online Exam
        </span>
      </Navbar.Brand>
      {isActive ? (
        <div className="flex">
          <Avatar placeholderInitials="FB" />
        </div>
      ) : (
        <div className="flex gap-4 md:order-2">
          <Link to="/auth/login">
            <Button className="bg-transparent !text-gray-900 hover:bg-transparent">
              Login
            </Button>
          </Link>
          <Link to="/auth/register">
            <Button>Register</Button>
          </Link>
        </div>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
