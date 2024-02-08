import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home";
import { ProjectPage } from "./pages/Project";
import { ContactPage } from "./pages/Contact";
import { Layout } from "./Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/Navbar";
import './App.css';

function App() {
  return(
    <>
    <NavigationBar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
