import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="col-span-4 max-h-[72px] gap-3 flex justify-between items-center px-8 py-3 bg-white rounded-[70px]">
      <Logo />

      <Navbar />

      <Profile />
    </header>
  );
};

export default Header;
