"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-900 bg-black/20 text-center relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex justify-center gap-8 mb-8 text-2xl text-slate-500">
                    <a href="https://github.com" target="_blank" className="hover:text-white transition-colors hover:-translate-y-1 duration-300"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-[var(--primary)] transition-colors hover:-translate-y-1 duration-300"><FaLinkedin /></a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-[var(--primary)] transition-colors hover:-translate-y-1 duration-300"><FaTwitter /></a>
                </div>

                <p className="text-slate-500 text-sm text-center">
                    © {new Date().getFullYear()} Designed & Made {" "}
                    <span className="text-red-500">❤️</span> by{" "}
                    <span className="text-white font-medium">Ankit Kumar</span>

                </p>


            </div>
        </footer>
    );
}
