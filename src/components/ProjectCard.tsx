import type { Project } from "../types";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="border border-gray-200 shadow-lg rounded-xl m-4 p-6 bg-white hover:shadow-2xl transition-shadow duration-200 flex flex-col items-center text-center">
            {/* Photo section */}
            <div className="flex justify-center mb-4">
                {project.demo_link ? (
                    <img
                        src={`https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(project.demo_link)}`}
                        alt={project.name + " demo"}
                        className="w-20 h-20 rounded-xl border-4 border-orange-200 shadow-md object-cover bg-gray-100"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.name)}&background=F59E42&color=fff&size=96`;
                        }}
                    />
                ) : (
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(project.name)}&background=F59E42&color=fff&size=96`}
                        alt={project.name}
                        className="w-20 h-20 rounded-xl border-4 border-orange-200 shadow-md object-cover bg-gray-100"
                    />
                )}
            </div>
            <div className="flex flex-col items-center w-full mb-2">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{project.name}</h2>
                <a
                    className="flex items-center gap-1 text-xs text-blue-600 hover:underline hover:text-blue-800 transition-colors justify-center"
                    href={project.gihtub_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                    GitHub
                </a>
            </div>
            <p className="text-gray-600 mb-4 w-full">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
                {project.tech_stack.map((skill: string, idx: number) => (
                    <span
                        key={idx}
                        className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-700 text-xs font-semibold border border-orange-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-2 justify-center mb-2">
                    <span className="inline-block w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                        {project.owner.name[0]}
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{project.owner.name}</span>
                </div>
            </div>
            {project.demo_link && (
                <div className="mt-4 w-full flex justify-center">
                    <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-fit border border-green-400 text-green-700 bg-green-400/10 rounded-lg px-4 py-2 text-xs font-semibold hover:bg-green-400/20 transition-colors"
                    >
                        Demo
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectCard