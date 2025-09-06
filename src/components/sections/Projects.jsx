import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Real-Time Weather and Safety Monitoring System
                            </h3>
                            <p className="text-gray-400 mb-4">
                                IoT monitoring system using ESP32 for
                                environmental and safety metrics with real-time
                                alerts and mobile app integration.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "ESP32",
                                    "Flutter",
                                    "Firebase",
                                    "MQTT",
                                    "Platform IO",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="text-gray-300 text-sm mb-4 space-y-1">
                                <li>
                                    • Real-time sensor monitoring (temperature,
                                    humidity, UV, gas)
                                </li>
                                <li>
                                    • Warning system with buzzer and LED alerts
                                </li>
                                <li>• Mobile app with statistics and graphs</li>
                            </ul>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/MuhammedMahmoud0/IoT-Project-Avatar"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Water Potability Analysis
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Machine learning project analyzing water
                                potability using multiple ML models with
                                comprehensive data preprocessing.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Python",
                                    "MongoDB",
                                    "Flask",
                                    "Scikit-learn",
                                    "Matplotlib",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(34,197,94,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="text-gray-300 text-sm mb-4 space-y-1">
                                <li>
                                    • ML models: KNN, SVM, Decision Tree, Naive
                                    Bayes
                                </li>
                                <li>
                                    • KNN imputation and feature engineering
                                </li>
                                <li>• Flask deployment with HTML interface</li>
                            </ul>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/MuhammedMahmoud0/Water-Potabilty-Analysis"
                                    className="text-green-400 hover:text-green-300 transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition md:col-span-2 lg:col-span-1">
                            <h3 className="text-xl font-bold mb-2">
                                Walmart Sales Analysis
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Comprehensive sales data analysis uncovering
                                trends and insights with focus on seasonal
                                patterns and external factors.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Python",
                                    "Pandas",
                                    "Matplotlib",
                                    "Seaborn",
                                ].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="text-gray-300 text-sm mb-4 space-y-1">
                                <li>
                                    • Holiday vs non-holiday sales comparison
                                </li>
                                <li>• External factors impact analysis</li>
                                <li>
                                    • Monthly and semester-wise trend
                                    visualization
                                </li>
                            </ul>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/MuhammedMahmoud0/Walmart-Sales-Analysis"
                                    className="text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
