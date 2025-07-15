import { Link } from "react-router-dom"
export const Home = () => {
    return (
    <section 
        id="home" 
        className="h-screen flex items-center justify-center relative"
     >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent leading-right">Hi, I'm Nolan Castaneda</h1>
                <div className = "flex flex-col md:flex-row-reverse items-end justify-center gap-8 mt-6">
                    <div className="relative">
                    <img
                        src="public/nolan.jpg"
                        alt="Nolan Castaneda"
                        className="w-60 h-60 rounded-full shadow-lg border-2 border-indigo-500 hover:scale-105 transition-transform duration-300 object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
                </div>
                
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I am a passionate and hard working student at Indiana University Bloomington. 
                    Currently striving to further build my base in data analytics and software development as a whole. 
                    Additionally, seeking opportunities where I can grow as a professional through guidance and hands-on experience, while being challenged to develop my skills in a dynamic environment.
                </p>

                </div>

                <div className="flex justify-center space-x-4">
                    <Link to="/projects" className="bg-indigo-700 text-white py-3 px-5 rounded font-medium transtion relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View Portfolio
                    </Link>
                    <Link to="/contact" className="border-indigo-500/50 text-indigo-500 py-3 px-6 rounded font-medium transtion-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10"
                    >
                        Contact Me
                    </Link>
                   
                </div>
            </div>
    </section>

    )
}