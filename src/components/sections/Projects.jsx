import { Link } from "react-router-dom";
export const Projects = () => {
    const projects = [
        {
            title: "Brown County Humane Society",
            image: "/Portfolio/bchs.png",
            link: "/projects/bchs",
            description: "Conducted various tests and assesments to ensure usability and accessibility of the Brown County Humane Society website, improving user experience and engagement."
        },
        {
            title: "Indiana University Society of Hispanic Professional Engineers",
            image: "/Portfolio/shpelogo.png", 
            link: "/projects/shpe",  
            description: "Led the development of a website for the Society of Hispanic Professional Engineers, enhancing the organization's online presence and member engagement."
        },
        {
            title: "Crestmont Boys and Girls Club",
            image: "/Portfolio/crestmont-bgc.png", 
            link: "/projects/crestmont-bgc",  
            description: "Introduced students at the Boys and Girls Club to engaging tech lessons, fostering their curiosity and enhancing their understanding of technology."
        },
        {
            title: "Modeling UFC Victories with Data Science",
            image: "/Portfolio/ufc.webp",
            link: "/projects/ufc-data-mining",
            description: "Developed a machine learning pipeline to predict UFC fight winners using logistic regression and decision trees, featuring data cleaning, feature engineering, model evaluation, and visualization of performance metrics." 
        },
        
    ]
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                    Featured Work
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