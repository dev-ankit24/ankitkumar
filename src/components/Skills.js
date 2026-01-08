"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaNodeJs, FaGitAlt, FaAws, FaBootstrap, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPostman, SiVercel, SiRender, SiTypescript, SiPostgresql, SiRedis } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
            { name: "Bootstrap", icon: FaBootstrap, color: "text-cyan-300" },
            { name: "React.js", icon: FaReact, color: "text-cyan-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-[var(--foreground)]" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-[var(--foreground)]" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },

        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
            { name: "Github", icon: FaGithub, color: "text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "Vercel", icon: SiVercel, color: "text-[var(--foreground)]" },
            { name: "Render", icon: SiRender, color: "text-white" },
            { name: "AWS", icon: FaAws, color: "text-orange-400" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="expertise" className="bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 tracking-tight text-white">
                        Technical Skills
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Technologies I use to build scalable full-stack applications.

                    </p>
                </motion.div>

                <div className="space-y-20">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title} className="text-center">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="text-xl font-semibold text-slate-300 mb-10 inline-block border-b border-slate-800 pb-2 px-4"
                            >
                                {category.title}
                            </motion.h3>

                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex flex-col items-center group cursor-default"
                                    >
                                        <skill.icon className={`text-4xl mb-4 ${skill.color} transition-transform duration-300 group-hover:-translate-y-1`} />
                                        <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
