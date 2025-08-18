export default function Navbar(){
    return(
        <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3 flex item-center justify-between">
                <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
                <ul className="flex gap-6 text-gray-600">
                    <li>
                        <a href="#about" className="hover:text-blue-600 cursor-pointer">
                        About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-600 cursor-pointer">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-blue-600 cursor-pointer">
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

/*
<nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1>My Portfolio</h1>
    </nav>
*/