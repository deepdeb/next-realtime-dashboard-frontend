import { AiOutlineDashboard, AiOutlineLike } from "react-icons/ai";
import { CiMoneyBill, CiWallet } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className="min-h-[95vh] min-w-[300px] hidden md:flex bg-white rounded-xl m-4 flex-col">
      <div className="flex flex-col space-y-8 h-full p-6">
        <div className="bg-zinc-100 rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 outline-none text-zinc-700 placeholder-zinc-400"
          />
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <AiOutlineDashboard size={30} className="text-zinc-500" />
          <p className="text-lg">Dashboard</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <CiMoneyBill size={30} className="text-zinc-500" />
          <p className="text-lg">Revenue</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <IoIosNotificationsOutline size={30} className="text-zinc-500" />
          <p className="text-lg">Notification</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <IoAnalytics size={30} className="text-zinc-500" />
          <p className="text-lg">Analytics</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <CiWallet size={30} className="text-zinc-500" />
          <p className="text-lg">Wallet</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <AiOutlineLike size={30} className="text-zinc-500" />
          <p className="text-lg">Likes</p>
        </div>
      </div>

      <div className="mt-auto p-6">
        <div className="flex items-center space-x-2 cursor-pointer text-zinc-700">
          <IoSettingsOutline size={30} className="text-zinc-500" />
          <p className="text-lg">Settings</p>
        </div>
      </div>
    </div>
  );
};