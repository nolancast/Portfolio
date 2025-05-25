import React from "react";

const CrestmontBGC = () => {
    return (
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem 1rem", paddingTop: "5rem" }}>
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                Boys and Girls Club Crestmont
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
                    src="/Portfolio/crestmont-bgc.png" 
                    alt="Crestmont Boys and Girls Club" 
                    className="rounded-lg mb-4 w-full object-cover"/>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Project Type</h3>
                        <p className="text-gray-300">Lesson Plans</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Location</h3>
                        <p className="text-gray-300">Bloomington</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Date</h3>
                        <p className="text-gray-300">January - May (2025)</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Role</h3>
                        <p className="text-gray-300"> Intern</p>
                    </div>
            
                
                </div>
                {/* Right Side: Description */}
                <div style={{ flex: "1 1 700px" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Problem Statement</h2>
                        <p className="text-gray-300 mt-2">
                            The Crestmont Boys & Girls Club (BGC) is a nonprofit organization in Bloomington, IN, committed to supporting and empowering local youth. Their mission is to help young people reach their full potential as caring, responsible, and productive members of the community.
                        </p>
                        <p className= "text-gray-300 mt-2">
                            As a Teach IT intern, I had the opportunity to hold weekly technology sessions at Crestmont BGC. Alongside my team, I introduced K-3 students to engaging tech lessons, fostering their curiosity and enhancing their understanding of technology.
                        </p>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Process</h2>
                        <p className="text-gray-300 mt-2"> The Boys & Girls Club asked our team to lead weekly sessions that would introduce K–3rd grade students to technology in an engaging and age-appropriate way. Their goal was to make tech education both fun and accessible for young learners with varying levels of experience.</p>
                        <p className="text-gray-300 mt-2">
                            The main challenge was designing and finding lessons that worked across a broad age range. Activities that were suitable for 3rd graders often proved too difficult for Kindergarteners, while simpler tasks left the older students disengaged.
                        </p>
                        <p className="text-gray-300 mt-2">
                            We evaluated a variety of lesson plans each week and prioritized hands-on, game-based learning to maintain student interest. Before each session, we collaborated to prepare materials. During the sessions, we presented the material and walked around to assist students individually, ensuring everyone stayed on track.
                        </p>
                        <p className="text-gray-300 mt-2">
                          We developed and implemented a scalable, adaptable lesson model that made tech education accessible and fun for all students, regardless of age or skill level. This structure allowed us to meet the learning needs of each student while keeping the classroom environment dynamic and inclusive.  
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-300">Final Reflection</h2>
                        <p className="text-gray-300 mt-2">
                            The opportunity to host Teach IT sessions at the Boys and Girls Club was a valuable experience. It taught me the importance of adaptability, especially when working with diverse age groups and learning styles. I learned that effective teaching isn't just about having a good plan, it's about being able to read the room, adjust in real time, and find ways to make the material meaningful for everyone.
                        </p>
                        <p className="text-gray-300 mt-2">
                            It also strengthened my communication and teamwork skills, as our success depended on constant collaboration before, during, and after each session. Most importantly, I gained a deeper appreciation for the role of empathy and patience in tech education, especially when introducing complex topics to young students in a fun, approachable way.
                        </p>
                        <p className="text-gray-300 mt-2">
                            As a team we were able to select topics that not only helped teach the future generation about technology but also increase their interest in skills like coding, graphic design, robotics, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrestmontBGC;