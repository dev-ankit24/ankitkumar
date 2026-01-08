"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        year: "2016 - 2020",
    },
    {
        degree: "Full Stack Development Bootcamp",
        school: "Code Academy",
        year: "2020",
    },
];

export default function Education() {
    return (
        <section id="education" className=" bg-black/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl text-center md:text-4xl font-bold font-display mb-4">My <span className="gradient-text">Qualifications</span></h2>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 glass-panel p-6 rounded-xl"
                        >
                            <div className="p-4 bg-[#df6531]/20 rounded-full text-[#df6531] text-2xl">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                <p className="text-gray-400">{edu.school}</p>
                                <span className="text-sm text-gray-500">{edu.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
