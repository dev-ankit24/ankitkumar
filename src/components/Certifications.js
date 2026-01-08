"use client";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
    {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
    },
    {
        name: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera",
        date: "2022",
    },
    {
        name: "Node.js Services Development",
        issuer: "OpenJS Foundation",
        date: "2021",
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className=" pt-4 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                        Certifications
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 leading-relaxed">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-[#df6531] transition-all flex flex-col justify-between h-full group"
                        >
                            <div className="mb-6 text-center">
                                <FaCertificate className="text-4xl text-[var(--primary)] mb-4 mx-auto" />
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">{cert.name}</h3>
                                <p className="text-slate-400 text-sm">{cert.issuer}</p>
                            </div>
                            <span className="text-xs text-slate-500 block text-center mt-auto border-t border-slate-800/50 pt-4 w-full">Issued: {cert.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
