"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-white">
                        About Me
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        I’m Ankit Kumar, a  <span className="text-[var(--primary)] font-medium">Full Stack Developer</span> experienced in building
                        end-to-end web applications using React.js, Next.js, Node.js,
                        Express.js, and MongoDB.

                        I focus on creating responsive UI, secure REST APIs, and
                        performance-optimized applications. Currently, I work at Perfect
                        Global Consultancy, developing scalable features and integrating
                        APIs using Git and GitHub.

                        I’m passionate about solving real-world problems and continuously
                        improving my full-stack skills.


                    </p>
                </motion.div>
            </div>
        </section>
    );
}
