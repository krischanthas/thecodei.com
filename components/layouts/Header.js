import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="py-2 outline flex justify-between items-center">
      <Link href="/">
        <a>
          <h1 className="px-4">
            <span className="font-bold text-lg">thecodei.com</span> | things you
            should know
          </h1>{" "}
        </a>
      </Link>
      <nav className="w-1/4">
        <ul className="flex justify-end px-4">
          <Link href="/recent">
            <a>
              <li className="px-2">Recent Posts</li>
            </a>
          </Link>
          <Link href="/topics">
            <a>
              <li className="px-2">Topics</li>
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default header;
