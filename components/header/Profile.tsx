import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 p-2">
      <div className="border-r pr-3 flex items-center gap-2 border-[#EDEDED]">
        <img
          src="/header/profile.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex self-stretch flex-col">
          <span className="text-sm font-medium">Dr. Jose Simmons</span>
          <span className="text-xs text-gray-500">General Practitioner</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <IoSettingsOutline className="w-5 h-5 text-gray-700 cursor-pointer" />
        <BsThreeDotsVertical className="w-5 h-5 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Profile;
