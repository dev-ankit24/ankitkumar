"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Hotel Booking Web Application",
        description: "A full-stack hotel booking application using React and Bootstrap for the frontend, and Node.js, Express, and MongoDB for the backend, featuring responsive UI and secure backend APIs.",
        tags: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "AWS EC2"],
        links: { demo: "https://www.vhotelthegrandshoba.com/" },
    },
    {
        title: "Business Website with Admin Dashboard",
        description: "A company website built using Next.js and Tailwind CSS for the frontend, with a custom backend to manage dynamic content. The project includes responsive pages, SEO-friendly routing, and REST API integration for handling contact forms and content updates.",
        tags: ["html", "css", "js", "Next.js", "Tailwind CSS", "vercel"],
        links: { demo: "https://www.pgcagency.in/" },
    },
    {
        title: "Movie Production Brand Website",
        description: "A film production company website built with Next.js and Tailwind CSS for the frontend, and a custom backend for managing dynamic content. The site features responsive layouts, cinematic visuals, and REST API integration to handle film projects, cast info, and contact inquiries.",
        tags: ["Html", "css", "js", "Next.js", "Tailwind CSS", "vercel"],
        links: { demo: "https://www.dadubalajifilms.com/" },
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                        Projects
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Some of the projects I’ve built using modern web technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-[var(--primary)]/50 transition-all group hover:-translate-y-1 duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold font-display text-white group-hover:text-[var(--primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4 text-xl text-slate-500">
                                    {/* <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaGithub /></a> */}
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaExternalLinkAlt /></a>
                                </div>
                            </div>

                            <p className="text-slate-400 text-justify mb-6 leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full text-[var(--primary)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
