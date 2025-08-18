import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact(){
    return (
        <section id="contact" className="py-20 text-center px-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
                Interested in working together or just want to say hi? Feel free to
                reach out through email, connect with me on LinkedIn and GitHub.
            </p>

            <div className="flex gap-4 justify-center">
                <a href="mailto:effelzefanyashuban@gmail.com"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    <FaEnvelope />Email Me
                </a>

                <a
                href="https://www.linkedin.com/in/effel-zefanya-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    <FaLinkedin /> LinkedIn
                </a>

                <a
                href="https://github.com/EffelZefanya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow hover:bg-gray-900 transition"
                >
                    <FaGithub /> GitHub
                </a>
            </div>
        </section>
    );
}