import { useState } from "react";

const NavbarOption = [
  {
    id: 1,
    name: "Overview",
    icon: (
      <img
        src="/header/home_FILL0_wght300_GRAD0_opsz24.svg"
        alt="people icon"
      />
    ),
  },
  {
    id: 2,
    name: "Patient",
    icon: (
      <img
        src="/header/group_FILL0_wght300_GRAD0_opsz24.svg"
        alt="people icon"
      />
    ),
  },
  {
    id: 3,
    name: "Schedule",
    icon: (
      <img
        src="/header/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
        alt="calendar icon"
      />
    ),
  },
  {
    id: 2,
    name: "Message",
    icon: (
      <img
        src="/header/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
        alt="calendar icon"
      />
    ),
  },
  {
    id: 3,
    name: "Transaction",
    icon: (
      <img
        src="/header/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
        alt="calendar icon"
      />
    ),
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
          <span className="text-sm font-bold">{route.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
