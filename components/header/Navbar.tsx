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
    icon: <GoHome className="w-[15px] h-[17px]" size={17} />,
  },
  {
    id: 2,
    name: "Patient",
    icon: <MdOutlinePeopleAlt className="w-6 h-[17px]" size={17} />,
  },
  {
    id: 3,
    name: "Schedule",
    icon: <CiCalendar className="w-[15px] h-[17px]" size={17} />,
  },
  {
    id: 2,
    name: "Message",
    icon: <FiMessageSquare className="w-[19px] h-[17px]" size={17} />,
  },
  {
    id: 3,
    name: "Transaction",
    icon: <IoMdCard className="w-[21px] h-[17px]" size={17} />,
  },
];

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Patient");

  return (
    <nav className="flex gap-6 text-sm font-bold">
      {NavbarOption.map((route) => (
        <div
          key={route.name}
          onClick={() => setActiveRoute(route.name)}
          className={`flex items-center hover:bg-[#01F0D0] font-bold rounded-full gap-2 py-2.5 px-4 cursor-pointer ${
            activeRoute === route.name && "bg-[#01F0D0]"
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
