
export const About = () => {
    const languages = ["C", "C++", "Python", "Dart", "JavaScript", "Racket"];
    const toolsFrameworks = [
        "Kafka",
        "Flutter",
        "React",
        "Node.js",
        "Git",
        "Linux",
        "MATLAB",
        "OpenGL",
    ];
    const systemsTech = [
        "Low-Level Systems",
        "Embedded Systems",
        "AWS EC2",
        "MySQL",
        "TCP/UDP Networking",
        "Proxy Bridging",
        "SQLite",
        "REST APIs",
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 bg-transparent hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I'm a Computer Science student at the Illinois Institute of Technology,
                        aspiring to become a software engineer. I've always been passionate about
                        building and problem-solving, constantly learning and improving my skills.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Outside of coding, I enjoy writing poetry, working out, reading the Bible, and
                        creating music. I strive to balance logic and creativity, always looking for new ways to grow
                        both technically and personally.
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">Tools & Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {toolsFrameworks.map((tool, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-white">Systems & Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {systemsTech.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="p-6 rounded-xl border-transparent border hover:-translate-y-1 transition-all">
                    <h3 className="text-2xl font-bold mb-6 text-white text-center">Education</h3>
                    <div className="text-gray-300 space-y-4">
                        <div>
                            <p className="font-semibold text-lg">
                                B.S. in Computer Science
                                <span className="font-normal"> – Illinois Institute of Technology</span>
                                <span className="block text-sm text-gray-400">Expected Dec 2025</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Relevant Coursework: Systems Programming, Parallel & Distributed Computing,
                                Distributed Systems, Database Organization, Software Engineering, Mobile App Development
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">
                                Associate of Engineering Science
                                <span className="font-normal"> – Wilbur Wright College</span>
                                <span className="block text-sm text-gray-400">Graduated May 2023 | GPA: 3.77 / 4.00</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="p-6 rounded-xl border-transparent border hover:-translate-y-1 transition-all mt-10">
                    <h3 className="text-2xl font-bold mb-6 text-white text-center">Work Experience</h3>
                    <div className="text-gray-300 space-y-6">
                        <div>
                        <p className="font-semibold text-lg">
                                Incoming Software Engineering Intern
                                <span className="font-normal"> – Northrop Grumman</span>
                                <span className="block text-sm text-gray-400">May – Jul 2025</span>
                            </p>
                            <p className="font-semibold text-lg">
                                DevOps Intern
                                <span className="font-normal"> – Northrop Grumman</span>
                                <span className="block text-sm text-gray-400">May – Jul 2024</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Contributed to the design and implementation of a bridging solution for proxy and non-proxy
                                communications across test system networks. Improved system testing feedback and supported
                                transitions from legacy to updated network systems.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">
                                Summer Research Intern
                                <span className="font-normal"> – Biophotonics Imaging Lab</span>
                                <span className="block text-sm text-gray-400">May – Jul 2023</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Built MATLAB programs to analyze biofilm dynamics, evaluating metrics like attenuation,
                                thickness, and void size in biological imaging.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">
                                Intern & Near-Peer Mentor
                                <span className="font-normal"> – Discovery Partners Institute</span>
                                <span className="block text-sm text-gray-400">Oct 2022 – Feb 2023</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Guided high school students across web development, machine learning, and data analysis concepts
                                through hands-on sessions and mentorship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
