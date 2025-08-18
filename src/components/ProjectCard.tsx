type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({title, description, link}: ProjectCardProps){
    return (
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium">
                View Project →
            </a>
        </div>
    )
}