export const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"]
    const backendSkills = ["Python", "C", "Java"] 
    return (
        <section id="about" className="flex items-center justify-center min-h-screen py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className= "text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate about technology and its potential to transform lives, I'm a dedicated software engineer who loves building intuitive and impactful solutions. 
                            I enjoy learning new technologies, collaborating with others, and turning ideas into reality through code. 
                            My hobbies include watching UFC and wrestling, listening to music, and staying active by lifting weights, practicing jiu jitsu, or occasionally hiking.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                        key={key}
                                        className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                        key={key}
                                        className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Education
                                </h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>B.S in Computer Science</strong> - Indiana University Bloomington (2023-2027)
                                    </li>
                                    <li>
                                        <strong>Minors:</strong> Data Science, Business
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework:</strong> Data Structures, Data Mining & Analysis
                                    </li>
                                </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Work Experience
                                </h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold"> Event Coordinator for IUB's Society of Hispanic Professional Engineers (Sep. 2024 - Present)</h4>
                                        <p>
                                            Organizing events to promote networking and professional development among students in STEM, 
                                            enhancing my leadership and organizational skills while fostering a sense of community.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold"> General Merchandise Expert at Target (Oct. 2023 - Present)</h4>
                                        <p>
                                            Provided exceptional customer service, developing strong communication and problem-solving
                                            skills while assisting customers. Also, stocked, organized, and maintained merchandise shelves to ensure optimal store presentation.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold"> Teach IT Intern with Serve IT (Jan. 2025 - May 2025)</h4>
                                        <p>
                                            Taught engaging tech lessons to Boys and Girls Club students, sparking their curiosity and deepening their understanding of technology.
                                        </p>
                                    </div>
                                    
                                    
                                </div>
                        </div>                                              
                    </div>
                </div>
        </section>
    )
}