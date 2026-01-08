"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        role: " Full Stack Developer",
        company: "Perfect Global Consultancy",
        period: "2024 - Present",
        description: "Working as a Full Stack Developer, building end-to-end web applications with React, Next.js, Node.js, Express, and MongoDB. Focused on responsive UI, REST API integration, and performance optimization."
    },
    {
        role: "MERN Stack Developer",
        company: "Ducat IT Training School",
        period: "2023 - 2024",
        description: "Completed hands-on MERN Stack training, where I built full-stack  applications using MongoDB, Express.js, React.js, and Node.js.  Gained practical experience in REST APIs, authentication,  CRUD operations, and responsive UI development."
    },
    // {
    //     role: "Junior Web Developer",
    //     company: "StartUp Hub",
    //     period: "2020 - 2021",
    //     description: "Collaborated with cross-functional teams to build MVP features for early-stage startups. Integrated third-party APIs (Stripe, Twilio) and managed CI/CD pipelines.",
    // },
];

export default function Experience() {
    return (
        <section id="experience" className=" pb-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-lg text-slate-400 mb-2">{exp.company}</p>
                            <span className="text-sm font-mono text-[var(--primary)] mb-2 block">{exp.period}</span>

                            <p className="text-slate-400 leading-relaxed max-w-2xl text-base">
                                {exp.description}
                            </p>

                            {/* Decorative separator line, visible except for last item */}
                            {index !== experiences.length - 1 && (
                                <div className="w-px h-16 bg-gradient-to-b from-[var(--primary)]/50 to-transparent mt-12" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
