import {BrowserRouter , Route , Routes} from 'react-router'
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import DetailsPage from './Pages/DetailsPage';
import { useEffect, useLayoutEffect, useState } from 'react';

function App() {
  const [darkMode, setdarkMode] = useState(false);
  
  
  useLayoutEffect(()=>{
    if(darkMode ){
      document.documentElement.classList.add("dark")
   
    }else{
      document.documentElement.classList.remove("dark")

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
