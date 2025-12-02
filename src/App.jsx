import { useEffect, useState } from "react"
import { useAuth } from "./context/authContext"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import SearchInput from "./components/SearchInput"
import { ToastContainer } from 'react-toastify'
import axios from "axios"

export default function App() {
  const { user, logout } = useAuth()
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [loadingSearch, setLoadingSearch] = useState(false)

  const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const addTask = async (text) => {
    const newTask = {
      id: Date.now(),
      author: user.username,
      text,
      completed: false,
    }
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    const savedTask = await response.json()
    setTasks([savedTask, ...tasks])
  }

  const toggleTask = async (id) => {
    const taskToToggle = tasks.find(t => t.id === id)
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed }

    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    setTasks(tasks.map(t => (t.id === id ? updatedTask : t)))
  }

  const handleSearchChange = (value) => {
    setLoadingSearch(true)
    setSearch(value)
    setTimeout(() => {
      setLoadingSearch(false)
    }, 700)
  }

  const filteredTasks = tasks.filter(
    (t) =>
      t.text.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black p-6 text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-yellow-400 drop-shadow">
          👥 Team To-Do
        </h1>
        <div>
          <span className="mr-4 font-semibold text-yellow-300">
            Hola, {user.username}
          </span>
          <button
            onClick={logout}
            className="bg-yellow-500 text-black font-bold rounded-lg p-3 mt-4 hover:bg-yellow-400 transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <SearchInput search={search} setSearch={handleSearchChange} />

      {loadingSearch ? (
        <div className="flex flex-col items-center justify-center p-6 mt-6 bg-neutral-900 border border-yellow-600 rounded-2xl shadow-xl">
          <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-2"></div>
          <span className="text-yellow-400 font-bold">Buscando...</span>
        </div>
      ) : (
        <>
          <TaskForm addTask={addTask} />
          <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
        </>
      )}
    </div>
  )
}