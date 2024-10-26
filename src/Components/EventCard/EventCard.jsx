import { FaRegClock } from 'react-icons/fa';

const EventCard = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      {/* First Event Card: Meetings */}
      <div className="bg-white rounded-2xl p-6 shadow-md w-full sm:w-[220px] transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-50">
        <div className="flex items-center space-x-2">
          <div className="bg-red-100 p-2 rounded-full">
            <FaRegClock className="text-red-500" />
          </div>
          <span className="text-xs uppercase text-gray-400">Meetings</span>
        </div>
        <h2 className="font-semibold text-lg mt-2 w-full sm:w-[200px]">Amanda at Ruth's</h2>
        <div className="mt-4">
          <span className="bg-pink-100 text-pink-500 px-2 py-1 rounded-full text-xs font-medium">Today</span>
        </div>
      </div>

      {/* Second Event Card: Trip */}
      <div className="bg-white rounded-2xl p-6 shadow-md w-full sm:w-[220px] transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-teal-50">
        <div className="flex items-center space-x-2">
          <div className="bg-teal-100 p-2 rounded-full">
            <FaRegClock className="text-teal-500" />
          </div>
          <span className="text-xs uppercase text-gray-400">Trip</span>
        </div>
        <h2 className="font-semibold text-lg mt-2 w-full sm:w-[200px]">Holidays in Norway</h2>
        <div className="mt-4">
          <span className="bg-teal-100 text-teal-500 px-2 py-1 rounded-full text-xs font-medium">Sat</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
