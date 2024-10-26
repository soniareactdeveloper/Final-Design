const tasks = [
  {
    id: 1,
    time: '10:00 am - 12:00 am',
    title: "Amanda at Ruth's",
    label: 'SHAKURO',
    labelColor: 'text-orange-500',
    timeBlock: '10 am - 12 pm',
  },
  {
    id: 2,
    time: '12:30 am - 3:00 pm',
    title: 'Read online reviews',
    label: 'DOCUMO',
    labelColor: 'text-teal-500',
    timeBlock: '12 pm - 3 pm',
  },
];

const Calendar = () => {
  return (
    <div className="w-[450px] mt-5 lg:mt-0 bg-gray-100 p-4 rounded-2xl shadow-md">
      {/* Date Selector */}
      <div className="flex justify-between mb-4 space-x-2">
        {['8 Mon', '9 Tue', '10 Wed', '11 Thu', '12 Fri'].map((date, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-12 h-12 ${
              index === 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
            } rounded-full`}
          >
            <span className="text-sm">{date.split(' ')[0]}</span>
            <span className="text-xs">{date.split(' ')[1]}</span>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="relative">
        {/* Time Labels */}
        <div className="absolute left-0 top-[20px] w-full">
          {['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm'].map((time, index) => (
            <div key={index} className="flex items-center h-16">
              <span className="w-12 text-right text-gray-500 pr-4 text-sm">{time}</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div className="absolute left-12 top-[25px] w-[380px] space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="relative bg-white rounded-lg p-4 shadow-md w-full">
              {/* Task label */}
              <span className={`${task.labelColor} text-xs font-bold uppercase`}>{task.label}</span>
              {/* Task title */}
              <p className="text-gray-800 text-lg">{task.title}</p>
              {/* Task time */}
              <p className="text-gray-500 text-sm">{task.time}</p>
              {/* Time Block indicator */}
              <div
                className={`absolute top-0 left-0 h-full w-1 rounded-l-lg ${
                  task.labelColor === 'text-orange-500' ? 'bg-orange-500' : 'bg-teal-500'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
