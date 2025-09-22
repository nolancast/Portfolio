import { Link } from "react-router-dom"
export const Home = () => {
    return (
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative px-4 py-8"
     >
            <div className="text-center z-10 w-full max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Nolan Castaneda
                </h1>
                <div className="flex flex-col md:flex-row-reverse items-center md:items-end justify-center gap-6 md:gap-8 mt-6">
                    <div className="relative flex-shrink-0">
                        <img
                            src="/Portfolio/nolan.jpg"
                            alt="Nolan Castaneda"
                            className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full shadow-lg border-2 border-indigo-500 hover:scale-105 transition-transform duration-300 object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
                    </div>
                
                    <p className="text-gray-400 text-base sm:text-lg mb-6 md:mb-8 max-w-lg text-center md:text-left">
                        I am a passionate and hard working student at Indiana University Bloomington. 
                        Currently striving to further build my base in data analytics and software development as a whole. 
                        Additionally, seeking opportunities where I can grow as a professional through guidance and hands-on experience, while being challenged to develop my skills in a dynamic environment.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-4 mt-6">
                    <Link to="/projects" className="w-full sm:w-auto bg-indigo-700 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-center"
                    >
                        View Portfolio
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto border border-indigo-500/50 text-indigo-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10 text-center"
                    >
                        Contact Me
                    </Link>
                   
                </div>
            </div>
    </section>

    )
}