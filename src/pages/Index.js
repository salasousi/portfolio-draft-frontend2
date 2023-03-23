
import { Link } from "react-router-dom";

function Index(props) {

    const loaded = () => {
        return props.projects.map((project) => (
            <div key={project._id} className="project">
                <Link to={`/projects/${project._id}`}>
                    <h1>{project.name}</h1>
                </Link>
                <img src={project.image} alt={project.name} />
            </div>
        )
    )};

    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    if (props.projects) {
        return loaded();
    } else {
        return loading();
    }

};



export default Index;