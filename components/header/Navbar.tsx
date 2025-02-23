import { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";


const NavbarOption = [
  {
    id: 1,
    name: "Overview",
    icon: <GoHome/>,
  },
  {
    id: 2,
    name: "Patient",
    icon: <MdOutlinePeopleAlt/>,
  },
  {
    id: 3,
    name: "Schedule",
    icon: <CiCalendar/>,
  },
  {
    id: 2,
    name: "Message",
    icon: <FiMessageSquare/>,
  },
  {
    id: 3,
    name: "Transaction",
    icon: <IoMdCard/>,
  },
];

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Patient");

  return (
    <nav className="flex space-x-2">
      {NavbarOption.map((route) => (
        <div
          key={route.name}
          onClick={() => setActiveRoute(route.name)}
          className={`flex items-center gap-2 p-2 cursor-pointer ${
            activeRoute === route.name
              ? "bg-green-500 text-grey-700 rounded-full"
              : "text-gray-700"
          }`}
        >
          {route.icon}
          <span className="text-sm font-medium">{route.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
