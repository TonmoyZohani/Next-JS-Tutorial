import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/client",
    label: "client",
  },
  {
    href: "/drinks",
    label: "drinks",
  },
  // {
  //   href: "/query",
  //   label: "query",
  // },
  {
    href: "/prisma-example",
    label: "prisma",
  },
  {
    href: "/tasks",
    label: "tasks",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl max-auto flex-col">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>

        <ul className="menu menu-horizontal">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
