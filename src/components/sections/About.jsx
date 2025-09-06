import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Aspiring data scientist with a passion for
                            transforming data into insights and building smart,
                            scalable solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                {" "}
                                🏫 Education{" "}
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> Currently Studying </strong> -
                                    Alexandria University (2022-2026)
                                </li>
                                <li>
                                    Relevant Coursework: Probability and
                                    Statistics, Regression, Machine Learning,
                                    Data Mining, and Data Visualization
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        IoT Summer Training - Alexandria
                                        University
                                    </h4>
                                    <p className="text-sm text-blue-400 mb-2">
                                        July 2024 - September 2024
                                    </p>
                                    <ul className="text-sm space-y-1">
                                        <li>
                                            • Gained hands-on experience in IoT
                                            systems, sensors, and communication
                                            protocols
                                        </li>
                                        <li>
                                            • Worked with ESP32, MQTT, and
                                            Firebase for real-time data
                                            monitoring
                                        </li>
                                        <li>
                                            • Integrated IoT devices with cloud
                                            platforms and Flutter applications
                                        </li>
                                        <li>
                                            • Applied Embedded C and Flutter in
                                            capstone project development
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
