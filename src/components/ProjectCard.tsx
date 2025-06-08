import type { Project } from "../types";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="border-2 rounded-lg m-4  p-4">
            <p>{project.name}</p>
            <p>{project.description}</p>
            <div className="flex space-between justify-around">{project.tech_stack.map((skill: string, idx: number) => (
                    <p key={idx} className="border rounded-lg p-2 bg-orange-500/65 text-[14px] ">{skill}</p>
                ))}
            </div>
            <p>{project.owner.name}</p>
            <a className="text-red" href={project.gihtub_link} target="_blank">github link</a> <br />
            {project.demo_link &&
                <a href={project.demo_link} target="_blank">Demo link</a>}
        </div>
    )
}

export default ProjectCard