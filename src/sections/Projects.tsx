import ProjectCard from "@/components/ProjectCard";
import { title } from "process";

export default function Projects(){
    const projectList = [
        {
            title: "Simple Library Management API",
            description: "A backend application built with Spring Boot and H2 database. Implements RESTful CRUD operations for managing entities. Demonstrates backend architecture, API design, and database integration.",
            link: "https://github.com/EffelZefanya/simple-library-management",
        },
        {
            title: "Next.js Portfolio",
            description:"This very website! Built with Next.js, Typescript, and Tailwind CSS to showcase my projects and skills.",
            link:"https://github.com/EffelZefanya/effel-zefanya-portfolio",
        },
        {
            title: "Game Nexus",
            description:"Building a full stack website using html+css+js+tailwind for the front-end. While utilizing expressjs for the back-end. The back end handles CRUD for user log in and register, also for contact form submission.",
            link:"https://github.com/EffelZefanya/Game-Nexus",
        },
        {
            title: "Websocket Learning",
            description:"A project to learn websocket and redis. The chat is stored inside redis through a pub/sub pattern so all user access the chat message from redis.",
            link:"https://github.com/EffelZefanya/Websocket-Learning-Go",
        },
        {
            title: "Simple Microservice Learning",
            description: "A project to learn microservice. REST API is used as gateway for all requests, while other services uses GRPC as their architecture.",
            link: "https://github.com/EffelZefanya/simple-microservice-practice"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projectList.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}