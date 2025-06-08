import type { Project } from "../types";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({project} : ProjectCardProps) => {
    return (
        <div className="border-2 m-4 rounded-lg p-4">
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.tech_stack}</p>
            <p>{project.owner.name}</p>
            <a href={project.gihtub_link} target="_blank">github link</a> <br />
            {project.demo_link &&
                <a href={project.demo_link} target="_blank">Demo link</a>}
        </div>
    )
}

export default ProjectCard