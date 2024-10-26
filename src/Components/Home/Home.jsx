import Calendar from "../Calendar/Calendar"
import EventCard from "../EventCard/EventCard"
import ToDoCard from "../ToDoCard/ToDoCard"


const Home = () => {
  return (
    <div className="flex justify-between flex-wrap lg:overflow-hidden p-6 ">
      <div>
        <EventCard/>
        <ToDoCard/>
      </div>
      <div>
        <Calendar/>
      </div>
    </div>
  )
}

export default Home