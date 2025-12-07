import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TaskDetails from "./pages/TaskDetails"
import { TaskProvider } from "./context/TaskContext"
import Layout from "./components/Layout"

export default function App() {
  return (
    <TaskProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </Layout>
    </TaskProvider>
  )
}
