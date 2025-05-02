import { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow mb-2">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span className="flex-1">{todo.text}</span>
      )}
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;