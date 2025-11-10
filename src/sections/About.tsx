// sections/About.tsx
export default function About() {
  return (
    <section id="about" className="py-20 text-center px-6">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        I’m Effel Zefanya, a Computer Science student passionate about using
        technology to drive growth and innovation. I’ve worked as a Software
        Engineer at Bank Sinarmas, handling both frontend and backend systems,
        and I co-own a printing solutions company where I combine technical and
        business skills. With experience in full-stack development, I aim to
        grow as a software engineer while building impactful projects.
      </p>

      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto text-gray-700">
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">Java / Spring Boot</span>
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">GoLang</span>
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">Next.js</span>
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">React</span>
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">TypeScript</span>
        <span className="bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">SQL / PostgreSQL</span>
      </div>
    </section>
  );
}
