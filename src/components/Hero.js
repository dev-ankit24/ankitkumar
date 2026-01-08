"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient/Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-slate-300 font-medium tracking-wider text-lg md:text-xl mb-6 uppercase">
                        Hi, I'm Ankit Kumar
                    </h2>

                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold font-display leading-tight mb-8 text-white">
                        Full Stack
                        <span className="text-[#df6531]">  Developer</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        I build scalable, responsive, and user-friendly web applications
                        using modern frontend and backend technologies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <a
                            href="#projects"
                            className="px-8 py-4    text-white font-semibold  rounded-full hover:bg-[#c05629] transition-all shadow-lg shadow-[#df6531]/25"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-full hover:bg-[#df6531] hover:border-[#df6531] transition-colors"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-8">
                        <SocialLink href="https://github.com" icon={<FaGithub />} />
                        <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
                        <SocialLink href="mailto:email@example.com" icon={<FaEnvelope />} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-slate-400 hover:text-white hover:scale-110 duration-300 transition-all"
        >
            {icon}
        </a>
    );
}
