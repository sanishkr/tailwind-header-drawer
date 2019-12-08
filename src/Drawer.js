import React, { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  const tog = () => {
    console.log({ open });
    setOpen(!open);
  };
  return (
    <div>
      <div
        className={
          open
            ? "bg-gray-400 opacity-25 absolute top-0 left-0 h-screen w-screen"
            : "opacity-100 absolute top-0 left-0 h-screen w-screen"
        }
      >
        <button onClick={tog} className="text-black text-2xl p-2 font-bold">
          &#9776;
        </button>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <nav
        className={
          open
            ? "navbar-open navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
            : "navbar-close navbar w-64 absolute overflow-x-scroll bg-gray-700 top-0 h-screen"
        }
      >
        <div className="flex pr-2 justify-end">
          <button onClick={tog} className="p-2 text-white text-xl font-bold">
            &#9747;
          </button>
        </div>
        <div className="bg-white shadow w-64 my-2">
          <ul className="list-reset">
            <li>
              <a
                href="#home"
                className="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
