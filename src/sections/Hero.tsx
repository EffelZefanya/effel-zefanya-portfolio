export default function Hero(){
    return(
        <section className="flex flex-col items-center justify-center text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Hello, I'm Effel 👋</h2>
            <p className="text-lg text-gray-600 max-w-xl">
                Aspiring Software Engineer | Java
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-hover:bh-blue-700 transition">
                View My Projects
            </button>
        </section>
    );
}