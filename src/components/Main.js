import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ projects, setProjects ] = useState(null);

  const URL = "http://localhost:4000/projects/";

  const getProjects = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProjects(data);
  };

  const createProjects = async (project) => {
    // make post request to create a project
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(project),
    });
    // updates list of projects
    getProjects();
  };

  useEffect(() => getProjects(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index projects={projects} createProjects={createProjects} />
        </Route>
        <Route
          path="/projects/:id"
          render={(rp) => (
            <Show
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}
  
  export default Main;