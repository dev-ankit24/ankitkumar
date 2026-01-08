"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#expertise" },
    { name: "Experience", href: "#experience" },
    // { name: "Qualifications", href: "#education" },

    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 border-b border-slate-700  left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-800" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-white">
                    Ankit<span className="text-[var(--primary)]"> Kumar</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-[var(--primary)] transition-colors text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/resume.pdf"
                        download="Ankit_Kumar_Resume.pdf"
                        className="px-6 py-2.5 bg-[var(--primary)] text-white hover:bg-[#df8539] hover:text-white text-sm font-bold rounded-full transition-all shadow-lg"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-white text-2xl hover:text-[var(--primary)] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-slate-950 border-t border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-[var(--primary)] font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                download="Ankit_Kumar_Resume.pdf"
                                className="inline-block text-center px-6 py-3 bg-[var(--primary)] hover:bg-[#c05629] text-white font-bold rounded-lg transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
