export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-7 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi, I'm Melvin Cabrera
                </h1>
                <p className="text-gray-400 text-lg mdb-16 max-w-lg mx-auto"> 
                    Hello! I'm a Computer Science student at the Illinois Institute of Technology, aspiring to become a software engineer. I have a passion for building and problem-solving, and I'm always eager to learn and improve my skills.                    
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};
