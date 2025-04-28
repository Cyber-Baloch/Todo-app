import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-between bg-gradient-to-br from-yellow-100 to-yellow-300 p-6">
      <main className="flex-grow">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">📝 Notes App</h1>

        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your note here..."
            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500 w-64"
          />
          <button
            onClick={addNote}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            Add Note
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-4"
            >
              <p className="text-gray-700">{note}</p>
              <button
                onClick={() => deleteNote(index)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-all duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
