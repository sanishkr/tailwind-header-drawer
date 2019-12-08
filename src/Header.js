import React from "react";
import Drawer from "./Drawer";

export default () => {
  return (
    <nav className="flex justify-between flex-wrap bg-teal-500">
      <div className="flex md:hidden lg:hidden">
        <Drawer />
      </div>
      <div className="ml-10 w-full block flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          <a
            href="#responsive-header"
            className="block mt-2 inline-block mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-2 inline-block mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-2 inline-block mt-0 text-teal-lighter hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#download"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white my-2 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};
