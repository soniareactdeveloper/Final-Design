import { FaStar, FaCalendarAlt, FaBell, FaTags, FaCommentDots } from 'react-icons/fa'; // Import icons
import { BsCalendarEvent } from 'react-icons/bs'; // Additional icon for tomorrow
import { Link } from 'react-router-dom'; // Import Link for navigation

const QuickActions = () => {
  return (
    <div className='flex justify-center'>
      <div className="mt-6 space-y-4 md:space-y-6">
        {/* Top row: Today and Tomorrow */}
        <div className="flex flex-col md:flex-row md:space-x-3">
          {/* Today button */}
          <Link to="/today">
            <button className="flex items-center bg-white p-2 md:p-3 space-x-2 rounded-full shadow-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition">
              <FaStar className="text-lg md:text-xl" />
              <span className="font-semibold text-sm md:text-base">Today</span>
            </button>
          </Link>

          {/* Tomorrow button */}
          <Link to="/tomorrow">
            <button className="flex items-center bg-white p-2 md:p-3 space-x-2 rounded-full shadow-sm text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition">
              <BsCalendarEvent className="text-lg md:text-xl" />
              <span className="font-semibold text-sm md:text-base">Tomorrow</span>
            </button>
          </Link>
        </div>

        {/* Bottom row: 4 icons */}
        <div className="flex flex-col md:flex-row md:space-x-3">
          {/* Calendar icon */}
          <Link to="/calendar">
            <button className="flex justify-center items-center bg-white p-2 md:p-3 rounded-full shadow-sm text-teal-500 hover:bg-teal-50 hover:text-teal-600 transition">
              <FaCalendarAlt className="text-lg md:text-xl" />
            </button>
          </Link>

          {/* Reminder icon */}
          <Link to="/reminders">
            <button className="flex justify-center items-center bg-white p-2 md:p-3 rounded-full shadow-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition">
              <FaBell className="text-lg md:text-xl" />
            </button>
          </Link>

          {/* Tag icon */}
          <Link to="/tags">
            <button className="flex justify-center items-center bg-white p-2 md:p-3 rounded-full shadow-sm text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition">
              <FaTags className="text-lg md:text-xl" />
            </button>
          </Link>

          {/* Message icon */}
          <Link to="/messages">
            <button className="flex justify-center items-center bg-white p-2 md:p-3 rounded-full shadow-sm text-purple-500 hover:bg-purple-50 hover:text-purple-600 transition">
              <FaCommentDots className="text-lg md:text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
