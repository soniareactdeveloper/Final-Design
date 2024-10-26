import { useState } from "react";

// Modal Component
const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!newTask.trim()) {
      setError('Task cannot be empty');
      return;
    }
    onSubmit(newTask);
    setNewTask('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center pr-12 items-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:w-[400px]">
        <h2 className="text-xl mb-4">Add New Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            if (error) setError('');
          }}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter task here"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
