import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ projects, setProjects ] = useState(null);
  const URL = 'https://sarahs-portfolio.herokuapp.com/projects/';

  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data);
  };

  // const createProjects = async (project) => {
  //   // make post request to create a project
  //   await fetch(URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify(project),
  //   });
  //   // updates list of projects
  //   getProjects();
  // };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main>
      <Routes>
        <Route path='/' element={<Index projects={projects} />} />
        <Route path='/projects/:id' element={<Show />} />
      </Routes>
    </main>
  );
}
  
  export default Main;