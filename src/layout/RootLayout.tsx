import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function RootLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col">
        <h1 className="bg-[#2F4BE5] text-white text-center">ADMIN PANEL</h1>
        <Outlet />
      </div>
    </div>
  );
}
export default RootLayout