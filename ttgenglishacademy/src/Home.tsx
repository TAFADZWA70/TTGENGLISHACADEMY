import React, { useState } from 'react'
import {
    BookOpen, Briefcase, Award, Video,
    Target, LayoutList, Globe, ChevronRight,
    ChevronDown, Mail, MapPin, GraduationCap, Menu, X
} from 'lucide-react'

interface TeamMember {
    name: string
    role: string
    bio: string
    initial: string
}

const teamMembers: TeamMember[] = [
    {
        name: "Trish",
        role: "Co-Founder & Lead Educator",
        bio: "Trish has years of experience teaching English online. She built the TTG curriculum from the ground up to help aspiring teachers find their confidence.",
        initial: "T"
    },
    {
        name: "Tanatsirwa",
        role: "Co-Founder & Operations",
        bio: "Tana manages the day to day operations of TTG Academy. She makes sure every student gets the support and resources they need to succeed.",
        initial: "T"
    },
    {
        name: "Gabi",
        role: "Co-Founder & Student Support",
        bio: "Gabi is the heart of TTG Academy. She handles student support, reviews and makes sure every learner feels welcome and supported.",
        initial: "G"
    }
]

const Home: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    let closeTimer: ReturnType<typeof setTimeout>

    const handleMouseEnter = () => {
        clearTimeout(closeTimer)
        setDropdownOpen(true)
    }

    const handleMouseLeave = () => {
        closeTimer = setTimeout(() => {
            setDropdownOpen(false)
        }, 150)
    }

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">

            {/* NAVBAR */}
            <nav className="bg-blue-900 text-white px-5 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <GraduationCap className="w-7 h-7 text-yellow-400" />
                    <span className="text-xl font-extrabold tracking-wide">
                        TTG <span className="text-yellow-400">Academy</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-6 text-sm font-medium items-center">
                    <div
                        className="relative pb-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="/" className="flex items-center gap-1 hover:text-yellow-400 transition">
                            Home
                            <ChevronDown className="w-3 h-3" />
                        </a>
                        {dropdownOpen && (
                            <div
                                className="absolute top-full left-0 mt-0 w-48 bg-white text-blue-900 rounded-xl shadow-xl overflow-hidden z-50"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#hero" className="block px-4 py-3 text-sm hover:bg-blue-50 font-medium border-b border-gray-100">Top of Page</a>
                                <a href="#offer" className="block px-4 py-3 text-sm hover:bg-blue-50 font-medium border-b border-gray-100">What We Offer</a>
                                <a href="#how" className="block px-4 py-3 text-sm hover:bg-blue-50 font-medium border-b border-gray-100">How It Works</a>
                                <a href="#mission" className="block px-4 py-3 text-sm hover:bg-blue-50 font-medium border-b border-gray-100">Our Mission</a>
                                <a href="#team" className="block px-4 py-3 text-sm hover:bg-blue-50 font-medium">Meet The Team</a>
                            </div>
                        )}
                    </div>
                    <a href="/packages" className="hover:text-yellow-400 transition">Packages</a>
                    <a href="/jobs" className="hover:text-yellow-400 transition">Jobs</a>
                    <a href="/articles" className="hover:text-yellow-400 transition">Articles</a>
                    <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
                    <a href="/login" className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold hover:bg-yellow-300 transition">Login</a>
                    <a href="/register" className="border border-yellow-400 text-yellow-400 px-4 py-1 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition">Register</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white p-1"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-blue-800 text-white flex flex-col px-6 py-4 gap-4 text-sm font-medium z-40 shadow-lg">
                    <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Home</a>
                    <a href="#offer" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">What We Offer</a>
                    <a href="#how" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">How It Works</a>
                    <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Our Mission</a>
                    <a href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Meet The Team</a>
                    <a href="/packages" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Packages</a>
                    <a href="/jobs" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Jobs</a>
                    <a href="/articles" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Articles</a>
                    <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400 transition py-1 border-b border-blue-700">Contact</a>
                    <div className="flex gap-3 pt-2">
                        <a href="/login" className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition flex-1 text-center">Login</a>
                        <a href="/register" className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition flex-1 text-center">Register</a>
                    </div>
                </div>
            )}

            {/* HERO */}
            <section id="hero" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-6 text-center">
                <p className="text-yellow-400 font-semibold text-xs uppercase tracking-widest mb-4">
                    Welcome to TTG English Academy
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                    Learn to Teach English
                    <br />
                    <span className="text-yellow-400">Online From Anywhere</span>
                </h1>
                <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-10">
                    TTG Academy gives you everything you need to become a confident
                    English teacher. Lessons, assignments, certifications, job board
                    and more all in one place.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/register" className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full text-base sm:text-lg hover:bg-yellow-300 transition shadow-lg">Get Started Free</a>
                    <a href="/packages" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-blue-900 transition">View Packages</a>
                </div>
            </section>

            {/* WHAT WE OFFER */}
            <section id="offer" className="py-16 px-5 bg-gray-50">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3">Everything You Need To Succeed</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                        TTG Academy is a complete learning platform built specifically for aspiring English teachers.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {[
                        { icon: <BookOpen className="w-7 h-7 text-blue-900" />, title: "Courses and Lessons", desc: "Structured PDF lessons and assignments that guide you from beginner to confident English teacher." },
                        { icon: <Briefcase className="w-7 h-7 text-blue-900" />, title: "Job Board", desc: "Find real English teaching jobs on platforms like VIPKid, iTalki, Preply and more." },
                        { icon: <Award className="w-7 h-7 text-blue-900" />, title: "Certifications", desc: "Discover TEFL, CELTA and other certifications that will make you stand out as an English teacher." },
                        { icon: <Video className="w-7 h-7 text-blue-900" />, title: "Video Tutorials", desc: "Watch expert video tutorials covering teaching techniques and lesson planning." },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                            <div className="flex justify-center mb-4">
                                <div className="bg-blue-100 p-4 rounded-full">{item.icon}</div>
                            </div>
                            <h3 className="text-base font-bold text-blue-900 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how" className="py-16 px-5 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-3">How It Works</h2>
                    <p className="text-gray-500 text-sm sm:text-base">Getting started takes less than 5 minutes</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
                    <div className="text-center flex-1 w-full">
                        <div className="w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">1</div>
                        <h3 className="font-bold text-blue-900 text-base mb-2">Create Your Account</h3>
                        <p className="text-gray-500 text-sm">Register with your details. Takes less than 2 minutes.</p>
                    </div>
                    <ChevronRight className="hidden md:block w-8 h-8 text-blue-300 shrink-0" />
                    <div className="text-center flex-1 w-full">
                        <div className="w-14 h-14 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">2</div>
                        <h3 className="font-bold text-blue-900 text-base mb-2">Choose Your Package</h3>
                        <p className="text-gray-500 text-sm">Pick the plan that suits you and pay via EFT bank transfer.</p>
                    </div>
                    <ChevronRight className="hidden md:block w-8 h-8 text-blue-300 shrink-0" />
                    <div className="text-center flex-1 w-full">
                        <div className="w-14 h-14 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">3</div>
                        <h3 className="font-bold text-blue-900 text-base mb-2">Start Learning</h3>
                        <p className="text-gray-500 text-sm">Access your lessons, assignments and videos instantly.</p>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <section id="mission" className="py-16 px-5 bg-blue-900 text-white text-center">
                <p className="text-yellow-400 font-semibold text-xs uppercase tracking-widest mb-4">Our Mission</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">Why We Built TTG Academy</h2>
                <p className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto mb-4">
                    We believe that anyone with a passion for English and the right guidance can become a great online teacher.
                    TTG Academy was built to break down the barriers. No expensive courses, no confusing platforms, no gatekeeping.
                </p>
                <p className="text-blue-200 text-base sm:text-lg max-w-3xl mx-auto">
                    Our mission is simple. Give every aspiring English teacher in South Africa and beyond the tools,
                    knowledge and confidence they need to start teaching online and earning an income doing what they love.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                    {[
                        { icon: <Target className="w-7 h-7 text-yellow-400" />, title: "Accessible", desc: "Affordable packages designed for South African students. No hidden fees. Pay via EFT." },
                        { icon: <LayoutList className="w-7 h-7 text-yellow-400" />, title: "Structured", desc: "Clear step by step lessons, assignments and final tests. You always know exactly where you are." },
                        { icon: <Globe className="w-7 h-7 text-yellow-400" />, title: "Global", desc: "Learn skills that let you work from anywhere in the world. Teach students from any country online." },
                    ].map((item, i) => (
                        <div key={i} className="bg-blue-800 rounded-2xl p-6">
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <h3 className="font-bold text-yellow-400 mb-2">{item.title}</h3>
                            <p className="text-blue-300 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MEET THE TEAM */}
            <section id="team" className="py-16 px-5 bg-gray-50">
                <div className="text-center mb-10">
                    <p className="text-yellow-500 font-semibold text-xs uppercase tracking-widest mb-2">The People Behind TTG</p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900">Meet The Team</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {teamMembers.map((member: TeamMember, index: number) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
                            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-extrabold text-yellow-400">{member.initial}</span>
                            </div>
                            <h3 className="text-lg font-extrabold text-blue-900 mb-1">{member.name}</h3>
                            <p className="text-yellow-500 font-semibold text-sm mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="bg-yellow-400 py-14 px-5 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-4">Ready To Start Your Teaching Journey?</h2>
                <p className="text-blue-800 mb-8 text-base sm:text-lg">Join hundreds of students already learning with TTG Academy</p>
                <a href="/register" className="bg-blue-900 text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-blue-800 transition shadow-lg inline-block">
                    Register Now — It's Free
                </a>
            </section>

            {/* FOOTER */}
            <footer className="bg-blue-900 text-white py-12 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <GraduationCap className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-lg font-bold">TTG <span className="text-yellow-400">Academy</span></h3>
                        </div>
                        <p className="text-blue-300 text-sm">Teaching you how to teach English online. Built by Trish, Tanatsirwa and Gabi.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3 text-yellow-400">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-blue-300">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/packages" className="hover:text-white transition">Packages</a></li>
                            <li><a href="/jobs" className="hover:text-white transition">Job Board</a></li>
                            <li><a href="/articles" className="hover:text-white transition">Articles</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-3 text-yellow-400">Contact Us</h4>
                        <ul className="space-y-2 text-sm text-blue-300">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 shrink-0" />
                                info@ttgacademy.com
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 shrink-0" />
                                South Africa
                            </li>
                            <li><a href="/contact" className="hover:text-white transition">Send us a message</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-400 text-sm">
                    © 2025 TTG English Academy. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default Home