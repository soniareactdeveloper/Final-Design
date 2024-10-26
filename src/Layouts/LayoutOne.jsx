import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


const LayoutOne = () => {
  return (
    <div className="flex h-screen"> 
      <Navbar />
      <div className="flex-1"> 
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutOne