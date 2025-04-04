import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import resumePDF from "../../assets/resume.pdf"; // ✅ your PDF here

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Contact Me
                </h2>
                <p className="text-gray-300 mb-8">
                    Feel free to reach out if you want to collaborate, connect, or just chat tech!
                </p>

                <div className="flex justify-center gap-6 text-blue-500 text-3xl mb-6">
                    <a href="https://github.com/melvin0111" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/melvin-cabrera-10" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:mcabrera2@hawk.iit.edu">
                        <FaEnvelope />
                    </a>
                    <a href={resumePDF} download>
                        <FaFileAlt />
                    </a>
                </div>

                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Melvin Cabrera</p>
            </div>
        </section>
    );
};
