import {BrowserRouter , Route , Routes} from 'react-router'
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import DetailsPage from './Pages/DetailsPage';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setdarkMode] = useState(localStorage.getItem("theme") === "dark");
  
  
  useEffect(()=>{
    if(darkMode ){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light");
    }
  },[darkMode])

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout setdarkMode={setdarkMode} darkMode={darkMode} />}>
        <Route  index element={<HomePage/>}/>
        <Route path='/details/:name' element={<DetailsPage/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
