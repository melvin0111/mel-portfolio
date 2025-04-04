// import eventImage from "../../assets/env-management-pic.png";
// import stockDashboard from "../../assets/dashboard.png";

// export const Projects = () => {
//     return <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
//         <div className="max-w-5xl mx-auto px-4">
//             <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//                 {" "}
//                 Featured Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 {/* Text Content */}
//                 <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Event Management System</h3>
//                     <p className="text-gray-300 mb-4">
//                     This project is a full-stack event management system built with Node.js, Express.js, and React.
//                      It provides features for user authentication, event creation, ticket management, order processing, 
//                      expense tracking, and reporting. The backend uses Knex.js for database interactions with MySQL, and 
//                      JWT-based authentication ensures secure access. The system includes modules for managing events, 
//                      tickets, orders, expenses, and salaries, along with reporting capabilities. A React frontend 
//                      integrates with the backend via RESTful APIs.
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                         {["React", "JavaScript", "Node.js", "MySQL", "Express.js"].map((tech, key) => (
//                             <span
//                                 key={key}
//                                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
//                                 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
                

//                 {/* Image Card with Blurred Hover + Text */}
//                 <a
//                     href="https://github.com/melvin0111/evnt-management-system"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
//                 >
//                     {/* Base Image */}
//                     <img
//                         src={eventImage}
//                         alt="Event Management System"
//                         className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
//                     />

//                     {/* Hover Text Overlay (no background color) */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                         <p className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
//                             View on GitHub
//                         </p>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     </section>;
// };
import eventImage from "../../assets/env-management-pic.png";
import stockDashboard from "../../assets/dashboard.png";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                {/* === Event Management System === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Event Management System</h3>
                        <p className="text-gray-300 mb-4">
                            This project is a full-stack event management system built with Node.js, Express.js, and React.
                            It provides features for user authentication, event creation, ticket management, order processing,
                            expense tracking, and reporting. The backend uses Knex.js for database interactions with MySQL, and
                            JWT-based authentication ensures secure access. The system includes modules for managing events,
                            tickets, orders, expenses, and salaries, along with reporting capabilities. A React frontend
                            integrates with the backend via RESTful APIs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "JavaScript", "Node.js", "MySQL", "Express.js"].map((tech, key) => (
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

                    {/* Image */}
                    <a
                        href="https://github.com/melvin0111/evnt-management-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
                    >
                        <img
                            src={eventImage}
                            alt="Event Management System"
                            className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                                View on GitHub
                            </p>
                        </div>
                    </a>
                </div>

                {/* === Stock Dashboard App === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stock Dashboard App</h3>
                        <p className="text-gray-300 mb-4">
                            A Flutter application for stock market exploration and journaling. Users can search for their favorite
                            stocks and cryptocurrencies, add them to their favorites, and write notes on each one. The app dynamically
                            updates the stock prices.
                            <br /><br />
                            I also added unit, widget, and integration tests. I used the Alpha Vantage RESTful API, so there is a strict
                            limit of 25 calls per day. Just a fun project I was working on to learn Flutter/Dart.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Flutter", "Dart", "SQLite", "REST API", "Alpha Vantage"].map((tech, key) => (
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

                    {/* Image */}
                    <a
                        href="https://github.com/melvin0111/flutter-stock-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
                    >
                        <img
                            src={stockDashboard}
                            alt="Stock Dashboard App"
                            className="w-96 h-64 object-cover object-top transition duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                                View on GitHub
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
