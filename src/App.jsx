import { useEffect, useState } from "react"
import { useAuth } from "./context/authContext"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import SearchInput from "./components/SearchInput"
import axios from "axios"

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`
});

export default function App() {
  const { user, logout } = useAuth()
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [loadingSearch, setLoadingSearch] = useState(false)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await apiClient.get('/tasks')
        // Ordenamos las tareas por fecha de creación para que las más nuevas aparezcan primero
        setTasks(response.data.sort((a, b) => b.id - a.id))
      } catch (error) {
        console.error("Error al cargar las tareas:", error)
      }
    }
    fetchTasks()
  }, []) // Ahora el array de dependencias puede estar vacío

  const addTask = async (text) => {
    const newTask = {
      // JSON-Server genera el ID automáticamente, no es necesario enviarlo.
      author: user.username,
      text,
      completed: false,
    }
    try {
      const response = await apiClient.post('/tasks', newTask)
      const savedTask = response.data
      setTasks([savedTask, ...tasks])
    } catch (error) {
      console.error("Error al añadir la tarea:", error)
    }
  }

  const toggleTask = async (id) => {
    const taskToToggle = tasks.find(t => t.id === id)
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed }

    try {
      await apiClient.put(`/tasks/${id}`, updatedTask)
      setTasks(tasks.map(t => (t.id === id ? updatedTask : t)))
    } catch (error) {
      console.error("Error al actualizar la tarea:", error)
    }
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