import { FaEdit } from 'react-icons/fa'; 
import { NavLink } from 'react-router-dom';
import QuickActions from '../QuickActions/QuickActions';

const Navbar = () => {
  // Example user data (replace with actual data)
  const user = {
    name: "John Doe",
    img: "https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  return (
    <div className="w-full md:w-[300px] h-screen p-4 md:p-6 lg:overflow-hidden">
      <div className="space-y-4">
        {/* General Section */}
        <NavLink
          to="/general"
          className={({ isActive }) =>
            `block hover:bg-[rgba(255,255,255,0.45)] transition-colors duration-300 bg-white p-3 md:p-4 rounded-xl shadow-sm ${isActive ? 'bg-[rgba(255,255,255,0.9)]' : ''}`
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-blue-500 h-8 w-1.5 rounded-md mr-4"></span>
              <div>
                <h2 className="font-semibold text-base md:text-lg">General</h2>
                <p className="text-sm text-gray-500">16 tasks</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEdit />
            </button>
          </div>
        </NavLink>

        {/* Meetings Section */}
        <NavLink
          to="/meetings"
          className={({ isActive }) =>
            `block hover:bg-[rgba(255,255,255,0.45)] transition-colors duration-300 bg-white p-3 md:p-4 rounded-xl shadow-sm ${isActive ? 'bg-[rgba(255,255,255,0.9)]' : ''}`
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-red-500 h-8 w-1.5 rounded-md mr-4"></span>
              <div>
                <h2 className="font-semibold text-base md:text-lg">Meetings</h2>
                <p className="text-sm text-gray-500">8 tasks</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEdit /> 
            </button>
          </div>
        </NavLink>

        {/* Trip Section */}
        <NavLink
          to="/trip"
          className={({ isActive }) =>
            `block hover:bg-[rgba(255,255,255,0.45)] transition-colors duration-300 bg-white p-3 md:p-4 rounded-xl shadow-sm ${isActive ? 'bg-[rgba(255,255,255,0.9)]' : ''}`
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="bg-teal-500 h-8 w-1.5 rounded-md mr-4"></span>
              <div>
                <h2 className="font-semibold text-base md:text-lg">Trip</h2>
                <p className="text-sm text-gray-500">4 tasks</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FaEdit /> 
            </button>
          </div>
        </NavLink>
      </div>

      {/* Create New Group Button */}
      <div className="mt-4">
        <button className="w-full bg-blue-500 text-white py-2 md:py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition">
          + CREATE NEW GROUP
        </button>
      </div>
      
      {/* Quick Actions */}
      <QuickActions/>
    
      {/* User Info Section */}
      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center space-x-2 md:space-x-3 mb-2">
          <img 
            src={user.img} 
            alt="User" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg" 
          /> 
          <span className="font-semibold text-base md:text-lg text-black">{user.name}</span> 
        </div>
        
        <button className="bg-red-500 text-white hover:bg-red-600 text-sm md:text-base py-1 px-2 md:py-1.5 md:px-3 rounded-lg transition duration-200 shadow-md transform hover:scale-105">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
