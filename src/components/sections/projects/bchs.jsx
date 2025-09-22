const BrownCountyHumaneSociety = () => {
    return (
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "2rem 1rem", paddingTop: "5rem" }}>
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-center">
                Brown County Humane Society
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
                    src="/Portfolio/bchs.png" 
                    alt="Brown County Humane Society" 
                    className="rounded-lg mb-4 w-full object-cover"/>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Project Type</h3>
                        <p className="text-gray-300">Accessibility User Testing</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Location</h3>
                        <p className="text-gray-300">Bloomington</p>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <h3 className="text-xl font-bold text-gray-300">Date</h3>
                        <p className="text-gray-300">August - December (2025)</p>
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
                            The Brown County Humane Society (BCHS) is a private, volunteer-supported nonprofit organization dedicated to serving the dogs and cats of Brown County, Indiana.
                        </p>
                        <p className= "text-gray-300 mt-2">
                            The Brown County Humane Society depends on its website to share its mission, promote pet adoptions, and engage with the local community. However, the site may present usability and accessibility challenges that create barriers for users with diverse needs. Improving accessibility is essential to ensuring that all individuals, regardless of ability, can effectively navigate the site and access important resources.
                        </p>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                        <h2 className="font-bold text-gray-300">Process</h2>
                        <p className="text-gray-300 mt-2"> As part of the Serve IT Accessibility Usability Team, I collaborated with peers to evaluate the Brown County Humane Society’s website. Our process included:</p>
                        <p className="text-gray-300 mt-2 indent-8">
                            <strong>Training:</strong> Gaining knowledge in accessibility standards, usability principles, and tools such as Figma.
                        </p>
                        <p className="text-gray-300 mt-2 ml-8">
                            <strong>Stakeholder Research:</strong> Reviewing the organization’s site, social media, and application to understand user needs.
                        </p>
                        <p className="text-gray-300 mt-2 ml-8">
                            <strong>Client Engagement:</strong> Conducting an initial meeting to learn about the agency’s goals and a final meeting to present our findings.
                        </p>
                        <p className="text-gray-300 mt-2 ml-8">
                            <strong>Assessments:</strong> Performing heuristic evaluations, user journey mapping, accessibility audits, and website performance testing.
                        </p>
                        <p className="text-gray-300 mt-2 ml-8">
                            <strong>Collaboration:</strong> Coordinating with other Serve IT teams to ensure timely delivery of assessments and recommendations.
                        </p>
                        <p className="text-gray-300 mt-2 ml-8">
                            <strong>Deliverables:</strong> Compiling results into a professional presentation and report for the client.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-300">Final Reflection</h2>
                        <p className="text-gray-300 mt-2">
                            [blank]
                        </p>
                        <p className="text-gray-300 mt-2">
                            [blank]
                        </p>
                        <p className="text-gray-300 mt-2">
                            [blank]
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrownCountyHumaneSociety;