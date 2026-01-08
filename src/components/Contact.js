"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Have a project in mind? I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button className="w-full md:w-auto px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold rounded-lg transition-all shadow-lg shadow-[var(--primary)]/20">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
