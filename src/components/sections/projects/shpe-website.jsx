const SHPEWebsite = () => {
    return (
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem 1rem", paddingTop: "5rem" }}>
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                Indiana University Society of Hispanic Professional Engineers
            </h1>
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                }}
            >
                {/* Left Side: Project Info */}
                <div style={{ flex: "1 1 250px", minWidth: 200 }}>
                    <img 
                    src="/Portfolio/shpelogo.png" 
                    alt="shpe logo" 
                    className="rounded-lg mb-4 w-full object-cover"/>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Project Type</h3>
                        <p className="text-gray-300">Website -  
                            <a
                                href="https://cnbloo.github.io/SHPE-Website/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline ml-1"
                            > SHPE@IU</a>
                        </p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Location</h3>
                        <p className="text-gray-300">Bloomington</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Date</h3>
                        <p className="text-gray-300">May - June (2025)</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Role</h3>
                        <p className="text-gray-300"> Project Lead Developer</p>
                    </div>
            
                
                </div>
                {/* Right Side: Description */}
                <div style={{ flex: "1 1 700px" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Problem Statement</h2>
                        <p className="text-gray-300 mt-2">
The Society of Hispanic Professional Engineers (SHPE) is a leading social-technical organization whose primary function is to enhance and achieve the potential of Hispanics in engineering, math, and science.                        </p>
                        <p className= "text-gray-300 mt-2">
                            Indiana University's SHPE chapter is a new organization on campus, and we needed a website to help promote our events, leadership information, and resources for members. The goal was to create a user-friendly platform that would be a main hub and enhance the chapter's online presence.
                        </p>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Process</h2>
                        <p className="text-gray-300 mt-2"> My peer and I developed a website for SHPE@IU to improve its online presence and provide members with clear, accessible information. After meeting with the executive board, we identified key features such as an “About” section, event display, showcasing of leadership, and ways of contact. We sketched wireframes and split responsibilities, each of us working on different sections to make the process more efficient.</p>
                        <p className="text-gray-300 mt-2">
                        We collaborated through GitHub, regularly merging changes and holding check-ins to stay aligned. We tested the site across devices and gathered feedback from SHPE members, which helped us refine mobile formatting and clarify content. After making final adjustments, we deployed the site using GitHub Pages and shared documentation for future updates.
                        </p>
                    
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-300">Final Reflection</h2>
                        <p className="text-gray-300 mt-2">
                            As a Project Lead Developer, I had the opportunity to design and deploy a fully responsive chapter website using HTML, CSS, and JavaScript, improving access to events, leadership info, and resources for members.
                        </p>
                        <p className="text-gray-300 mt-2">
                            This project enhanced my skills in web development, collaboration, and project management. I learned the importance of clear communication and adaptability when working with a team, especially in a fast-paced environment. The experience also reinforced my passion for creating user-friendly digital solutions that can make a positive impact on personal communities.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SHPEWebsite;