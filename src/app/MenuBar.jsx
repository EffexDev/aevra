"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center text-lg p-5">
      <nav>
        <ul className="flex space-x-4 ">
          {[
            { name: "Home", path: "/" },
            { name: "Technologies", path: "/technologies" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`p-2 rounded-3xl hover:bg-[#2C497F] hover:text-white ease-in-out hover:scale-110 ${
                  pathname === path
                    ? "bg-[#aca8ad]  text-white"
                    : "text-black dark:text-gray-300"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;