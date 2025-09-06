import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
    const dataScience = [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "SQL",
        "R (basic)",
        "Tableau (basic)",
        "Excel (basic)",
        "Power BI (basic)",
        "PyTorch (learning)",
    ];

    const backend = [
        "FastAPI (learning)",
        "Flask",
        "Node.js (learning)",
        "MongoDB",
        "Express.js (learning)",
    ];

    const frontend = ["React", "TailwindCSS"];

    const tools = ["Git", "GitHub", "Docker (beginner)", "Linux (beginner)"];

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Skills & Technologies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-blue-400">
                                Data Science
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {dataScience.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-green-400">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backend.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                        hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-pink-400">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontend.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 
                                        hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-yellow-400">
                                Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                        hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
