import { Link } from "react-router-dom";
export const Projects = () => {
    const projects = [
        {
            title: "Crestmont Boys and Girls Club",
            image: "/Portfolio/crestmont-bgc.png", 
            link: "/projects/crestmont-bgc",  
            description: "The Crestmont Boys & Girls Club (BGC) is a nonprofit organization in Bloomington, IN, committed to supporting and empowering local youth. Their mission is to help young people reach their full potential as caring, responsible, and productive members of the community."
        },
    ]
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="rounded-xl border border-white/10 p-6 hover:-translate-y-1 transition-all bg-white/5">
                            <Link to={project.link}>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-80 transition"
                                />
                            </Link>
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}