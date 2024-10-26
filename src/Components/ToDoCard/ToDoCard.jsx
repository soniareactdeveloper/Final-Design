import { useState } from 'react';
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import Modal from '../Modal/Modal';

const ToDoCard = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Take the coat to dry cleaning', completed: false },
    { id: 3, task: "Fix mom's bike", completed: true },
    { id: 2, task: "Help with Sam's project", completed: false },
    { id: 4, task: 'Schedule dentist appointment', completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTask = (id) => {
    const newTask = prompt('Edit your task:');
    if (newTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask } : todo
        )
      );
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTask = (task) => {
    const newTodo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="bg-white w-full bg-opacity-80 p-6 mt-8 rounded-2xl shadow-md max-w-full mx-auto md:w-[460px]">
      <div className="max-h-[450px] overflow-y-auto space-y-6">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-blue-600 border-gray-300 rounded-full"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span
                className={`text-base sm:text-lg md:text-xl ${
                  todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
                }`}
              >
                {todo.task}
              </span>
            </div>
            <div className="relative cursor-pointer group">
              <FiMoreHorizontal className="text-gray-400 h-6 w-6" />
              <div className="absolute hidden group-hover:block bg-white p-2 shadow-lg rounded-lg top-6 right-0">
                {!todo.completed && (
                  <button
                    className="block px-3 py-1 text-sm text-blue-500 hover:bg-gray-100"
                    onClick={() => editTask(todo.id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="block px-3 py-1 text-sm text-red-500 hover:bg-gray-100"
                  onClick={() => deleteTask(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center space-x-4">
          <button
            className="text-blue-500 flex items-center space-x-2 text-lg sm:text-xl"
            onClick={() => setIsModalOpen(true)}
          >
            <FiPlus className="h-6 w-6" />
            <span>Add subtask</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addTask}
      />
    </div>
  );
};

export default ToDoCard;
