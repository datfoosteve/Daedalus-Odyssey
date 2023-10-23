"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";


const navItems = {
  "/": {
    name: "/homepage",
  },
  "/blog": {
    name: "/blog",
  },
  "/resume": {
    name: "/resume",
  },
  "/projects": {
    name: "/projects",
  },
  "/timeline": {
    name: "/timeline",
  },
  "/guestbook": {
    name: "/guestbook",
  },
  "/contact": {
    name: "/contact",
  },
};

const groupedNavItems = {
  "About Me": [
    { name: "Homepage", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Timeline", path: "/timeline" },
    { name: "Autobiography", path: "/autobiography" }, // Added Autobiography here
  ],
  Work: [
    { name: "Projects", path: "/projects" },
    { name: "Portfolio", path: "/portfolio" },         // Added Portfolio here
    { name: "Blog", path: "/blog" },
  ],
  Interact: [
    { name: "Guestbook", path: "/guestbook" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },           // Added Services here
  ],
};

export default function Navbar() {
  let pathname = usePathname() || "/";

  const paths = [
    "/blog/",
    "/projects",
    "/timeline",
    "/resume",
    "/guestbook",
    "/contact",
    "/autobiography",     // Added Autobiography here
    "/portfolio",         // Added Portfolio here
    "/services",          // Added Services here
  ];

  paths.forEach((path) => {
    if (pathname.includes(path)) {
      pathname = path;
    }
  });

  return (
    <NavigationMenu>
    <NavigationMenuList className="m-2 pd-2">
        {Object.entries(groupedNavItems).map(([group, items]) => (
            <NavigationMenuItem key={group} className="group">
                <NavigationMenuTrigger className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300 px-4 py-2 outline-yellow-500">
                    {group}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid text-center rounded-xl gap-2 p-2 bg-gray-100 shadow-lg w-[400px] md:w-[300px] sm:w-[250px]">
                        {items.map(({ name, path }) => (
                            <li key={name}>
                                <Link href={path} passHref>
                                    <NavigationMenuLink
                                        asChild
                                        className={clsx(
                                            "block rounded-lg p-2 leading-none transition-all duration-150 transform hover:scale-105 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50",
                                            {
                                                "text-black bg-slate-200 shadow-inner": pathname === path, 
                                                "text-gray-700": true,
                                            }
                                        )}
                                    >
                                        <div className="text-md font-medium">{name}</div>
                                    </NavigationMenuLink>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        ))}
    </NavigationMenuList>
</NavigationMenu>

  );
}
