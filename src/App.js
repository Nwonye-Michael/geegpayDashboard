import logo from "./logo.svg"
import "./App.css"
import Layout from "./components/Layout"
import DashBoard from "./components/DashBoard"

function App() {
  return (
    <div className="App">
      <Layout>
        <DashBoard />
      </Layout>
    </div>
  )
}

export default App
