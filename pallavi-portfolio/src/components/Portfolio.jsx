import { useEffect, useRef, useState, useCallback } from "react";
import PROFILE_IMG from "../assets/ProfilePic.png";
import {
    FiGithub as Github,
    FiLinkedin as Linkedin,
    FiMail as Mail,
    FiPhone as Phone,
    FiArrowRight as ArrowRight,
    FiExternalLink as ExternalLink,
    FiCode as Code2,
    FiDatabase as Database,
    FiTool as Wrench,
    FiLayers as Layers,
    FiAward as Award,
    FiChevronRight as ChevronRight,
    FiMenu as Menu,
    FiX as X,
    FiSend as Send,
    FiMapPin as MapPin,
} from "react-icons/fi";
import { FaGraduationCap as GraduationCap } from "react-icons/fa";
import { HiSparkles as Sparkles } from "react-icons/hi";


const C = {
    base: "#050308",
    panel: "rgba(255,255,255,0.035)",
    panelBorder: "rgba(255,255,255,0.09)",
    panelBorderHover: "rgba(168,116,255,0.55)",
    violet: "#8B5CF6",
    violetSoft: "#B79BFF",
    magenta: "#E754D6",
    magentaSoft: "#F49FE8",
    textPrimary: "#F5F2FB",
    textMuted: "#AFA3C8",
    textDim: "#6E6489",
};
const GRAD = "linear-gradient(135deg, #8B5CF6 0%, #C74BE0 55%, #E754D6 100%)";


const NAV = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
    { title: "Languages", icon: Code2, items: ["Java", "JavaScript", "HTML5", "C"] },
    {
        title: "Frameworks & Libraries",
        icon: Layers,
        items: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "Bootstrap", "React.js"],
    },
    { title: "Databases", icon: Database, items: ["MySQL", "PostgreSQL"] },
    { title: "Tools", icon: Wrench, items: ["Eclipse", "VS Code", "Git", "GitHub"] },
];

const CONCEPTS = [
    "OOP",
    "Multithreading",
    "Exception Handling",
    "Collections Framework",
    "MVC Architecture",
    "REST APIs",
    "CRUD Operations",
];

const EXPERIENCE = {
    role: "Java Full-Stack Development",
    company: "Fortune Cloud Technologies Pvt Ltd",
    duration: "August 2025 – May 2026",
    points: [
        "Built full-stack web applications using Java, Spring Boot, React.js, HTML, CSS, JavaScript and Bootstrap.",
        "Developed RESTful APIs and integrated them with React-based front-end applications.",
        "Implemented CRUD operations, authentication, form handling, and responsive UI components.",
        "Worked with MySQL and PostgreSQL for database design, querying, and optimization.",
        "Followed industry practices for scalable, secure, and maintainable application development.",
    ],
};

const EDUCATION = [
    { degree: "B.E. — Computer Engineering", school: "Siddhant College of Engineering, SPPU", duration: "2023 – 2027" },
    { degree: "Higher Secondary Certificate", school: "Pratibha Junior College, Chinchwad", duration: "2021 – 2023" },
    { degree: "Secondary School Certificate", school: "Ganesh International School, Chikhali", duration: "2020 – 2021" },
];

const PROJECTS = [
    {
        name: "Hospital Management System",
        stack: ["Spring Boot", "React.js", "Hibernate/JPA", "Spring Security", "MySQL"],
        points: [
            "Full-stack app for patients, doctors, appointments & admin operations.",
            "REST APIs in Spring Boot, wired up to a React.js frontend.",
            "Role-based access control via Spring Security.",
            "Responsive dashboards for hospital administration.",
        ],
    },
    {
        name: "Employee Leave Management System",
        stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Bootstrap"],
        points: [
            "Role-based access for Employees and Administrators.",
            "Leave application, approval/rejection workflow & balance tracking.",
            "Responsive UI built with Bootstrap and CSS.",
            "Session management & auth using Servlets and JSP.",
        ],
    },
    {
        name: "Attendance Management System",
        stack: ["Java", "Spring Boot", "PostgreSQL"],
        points: [
            "Scalable CRUD-based attendance management platform.",
            "Secure authentication using Spring Security.",
            "Optimized database queries for better performance.",
        ],
    },
];

const CERTS = [
    "be10x AI Tools Workshop",
    "Deloitte Technology Job Simulation",
    "Deloitte Cyber Security Job Simulation",
    "ExcelR Vibe Coding with Generative AI",
    "NPTEL Cyber Security",
];

const CONTACT = {
    phone: "+91 8799849790",
    email: "pallavidhope10m.4@gmail.com",
    linkedin: "https://linkedin.com/in/pallavi-dhopeb218b6328",
    github: "https://github.com/pallavid18",
};

function openLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
}

function useReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const h = (e) => setReduced(e.matches);
        mq.addEventListener ? mq.addEventListener("change", h) : mq.addListener(h);
        return () => (mq.removeEventListener ? mq.removeEventListener("change", h) : mq.removeListener(h));
    }, []);
    return reduced;
}

function Reveal({ children, className = "", style = {}, as: Tag = "div", delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    setVisible(true);
                    io.unobserve(e.target);
                }
            }),
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms`, ...style }}
        >
            {children}
        </Tag>
    );
}


function Badge({ children, tone = "violet" }) {
    return (
        <span
            className="chip d-inline-flex align-items-center"
            style={{
                fontSize: "0.78rem",
                padding: "6px 13px",
                borderRadius: "999px",
                border: `1px solid ${C.panelBorder}`,
                background: "rgba(255,255,255,0.04)",
                color: tone === "violet" ? C.violetSoft : C.magentaSoft,
                fontWeight: 500,
            }}
        >
            {children}
        </span>
    );
}

function GlassCard({ children, className = "", style = {}, hover = true }) {
    return (
        <div
            className={`${hover ? "glass-card-hover" : ""} ${className}`}
            style={{
                background: C.panel,
                border: `1px solid ${C.panelBorder}`,
                borderRadius: "16px",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function SectionEyebrow({ icon: Icon, children }) {
    return (
        <div className="d-flex align-items-center gap-2 mb-3">
            <span
                className="d-flex align-items-center justify-content-center"
                style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(139,92,246,0.15)" }}
            >
                <Icon size={14} style={{ color: C.violetSoft }} />
            </span>
            <span
                className="text-uppercase"
                style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: C.textDim, fontWeight: 600 }}
            >
                {children}
            </span>
        </div>
    );
}

function AuroraBackground() {
    return (
        <div className="aurora-wrap" aria-hidden="true">
            <div className="aurora-wash" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="orb orb-4" />
            <div className="vignette" />
            <div className="grain" />
        </div>
    );
}


export default function Portfolio() {
    const reducedMotion = useReducedMotion();
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [copied, setCopied] = useState(false);
    const sectionRefs = useRef({});

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );
        Object.values(sectionRefs.current).forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);


    const registerRef = useCallback((id) => (el) => {
        if (el) {
            sectionRefs.current[id] = el;
        } else {
            delete sectionRefs.current[id];
        }
    }, []);

    const scrollTo = useCallback(
        (id) => {
            setMenuOpen(false);
            const el = sectionRefs.current[id];
            if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        },
        [reducedMotion]
    );

    const copyEmail = () => {
        navigator.clipboard?.writeText(CONTACT.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        });
    };

    return (
        <div style={{ background: C.base, color: C.textPrimary, minHeight: "100vh", position: "relative", fontFamily: "'Inter', sans-serif" }}>
            <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        p, h1, h2, h3, h4 { margin: 0; }
        button { font-family: inherit; }
        h1, h2, h3, h4 { font-family: 'Space Grotesk', sans-serif; }

        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }

        .aurora-wrap { position: fixed; inset: 0; overflow: hidden; z-index: 0; pointer-events: none; background: #050308; }
        .aurora-wash {
          position: absolute; inset: -20%; opacity: 0.35; mix-blend-mode: screen;
          background: conic-gradient(from 0deg, #8B5CF6, #E754D6, #4C1D95, #8B5CF6);
          filter: blur(140px); animation: rotateWash 40s linear infinite;
        }
        @keyframes rotateWash { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; mix-blend-mode: screen; }
        .orb-1 { width: 480px; height: 480px; top: -140px; left: -100px; background: radial-gradient(circle, #A876FF, transparent 68%); animation: floatA 14s ease-in-out infinite; }
        .orb-2 { width: 420px; height: 420px; bottom: -120px; right: -80px; background: radial-gradient(circle, #F262E3, transparent 68%); animation: floatB 17s ease-in-out infinite; }
        .orb-3 { width: 340px; height: 340px; top: 38%; left: 52%; background: radial-gradient(circle, #6D3FD1, transparent 68%); animation: floatC 20s ease-in-out infinite; }
        .orb-4 { width: 260px; height: 260px; top: 8%; right: 12%; background: radial-gradient(circle, #FF8FE0, transparent 68%); animation: floatD 12s ease-in-out infinite; }
        @keyframes floatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(110px,90px) scale(1.2); } }
        @keyframes floatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-100px,-80px) scale(1.15); } }
        @keyframes floatC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-90px,100px) scale(0.85); } }
        @keyframes floatD { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px,60px) scale(1.25); } }
        .vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 0%, transparent 35%, #050308 92%); }
        .grain { position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03), transparent 55%); }

        .gradient-text { background: ${GRAD}; -webkit-background-clip: text; background-clip: text; color: transparent; }

        .glow-btn { transition: transform 0.2s ease, box-shadow 0.25s ease, opacity 0.2s ease; }
        .glow-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -8px rgba(139,92,246,0.55); }

        .ghost-btn { transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease; }
        .ghost-btn:hover { transform: translateY(-2px); border-color: ${C.violetSoft}; background: rgba(139,92,246,0.1); }

        .glass-card-hover { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .glass-card-hover:hover { transform: translateY(-5px); border-color: ${C.panelBorderHover}; box-shadow: 0 14px 40px -12px rgba(139,92,246,0.4); }

        .chip { transition: transform 0.2s ease, border-color 0.2s ease; }
        .chip:hover { transform: translateY(-2px); border-color: ${C.panelBorderHover}; }

        .icon-btn { transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease; }
        .icon-btn:hover { transform: translateY(-3px) scale(1.06); border-color: ${C.panelBorderHover}; }

        .nav-link-item { position: relative; transition: color 0.2s ease; }
        .nav-link-item::after {
          content: ''; position: absolute; left: 0; bottom: -6px; width: 100%; height: 2px;
          background: ${GRAD}; transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease;
        }
        .nav-link-item.active::after, .nav-link-item:hover::after { transform: scaleX(1); }

        .photo-ring { position: relative; }
        .photo-ring::before {
          content: ''; position: absolute; inset: -5px; border-radius: 24px; background: ${GRAD};
          opacity: 0.8; filter: blur(2px); z-index: 0;
        }
        .photo-float { animation: floatPhoto 6s ease-in-out infinite; }
        @keyframes floatPhoto { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.5); } 50% { box-shadow: 0 0 0 8px rgba(139,92,246,0); } }

        ::selection { background: rgba(139,92,246,0.4); }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .orb, .photo-float, .pulse-dot { animation: none !important; }
        }
      `}</style>

            <AuroraBackground />

            {/* ---------------- NAVBAR ---------------- */}
            <nav
                className="fixed top-0 w-100"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 40,
                    background: scrolled ? "rgba(5,3,8,0.75)" : "transparent",
                    borderBottom: scrolled ? `1px solid ${C.panelBorder}` : "1px solid transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    transition: "background-color 0.3s ease, border-color 0.3s ease",
                }}
            >
                <div className="d-flex align-items-center justify-content-between px-3 px-md-5" style={{ maxWidth: 1180, margin: "0 auto", height: 68 }}>
                    <button
                        onClick={() => scrollTo("home")}
                        className="fw-bold border-0 bg-transparent"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.15rem", color: C.textPrimary }}
                    >
                        Pallavi<span className="gradient-text">.dev</span>
                    </button>

                    <div className="d-none d-md-flex align-items-center gap-4">
                        {NAV.map((n) => (
                            <button
                                key={n.id}
                                onClick={() => scrollTo(n.id)}
                                className={`nav-link-item border-0 bg-transparent ${active === n.id ? "active" : ""}`}
                                style={{ fontSize: "0.9rem", color: active === n.id ? C.textPrimary : C.textMuted, fontWeight: 500 }}
                            >
                                {n.label}
                            </button>
                        ))}
                    </div>

                    <div className="d-none d-md-flex align-items-center gap-2">
                        <button
                            onClick={() => openLink(CONTACT.github)}
                            className="icon-btn d-flex align-items-center justify-content-center"
                            style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)" }}
                            aria-label="Open GitHub profile"
                        >
                            <Github size={16} style={{ color: C.textPrimary }} />
                        </button>
                        <button
                            onClick={() => openLink(CONTACT.linkedin)}
                            className="icon-btn d-flex align-items-center justify-content-center"
                            style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)" }}
                            aria-label="Open LinkedIn profile"
                        >
                            <Linkedin size={16} style={{ color: C.textPrimary }} />
                        </button>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="glow-btn"
                            style={{
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                padding: "9px 18px",
                                borderRadius: "999px",
                                border: "none",
                                background: GRAD,
                                color: "#0A0612",
                                marginLeft: 6,
                            }}
                        >
                            Hire Me
                        </button>
                    </div>

                    <button className="d-md-none border-0 bg-transparent" onClick={() => setMenuOpen((v) => !v)} style={{ color: C.textPrimary }}>
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="d-md-none px-3 pb-3" style={{ background: "rgba(5,3,8,0.95)", borderBottom: `1px solid ${C.panelBorder}` }}>
                        {NAV.map((n) => (
                            <button
                                key={n.id}
                                onClick={() => scrollTo(n.id)}
                                className="d-block w-100 text-start border-0 bg-transparent py-2"
                                style={{ color: active === n.id ? C.textPrimary : C.textMuted, fontSize: "0.95rem" }}
                            >
                                {n.label}
                            </button>
                        ))}
                        <div className="d-flex gap-2 mt-2">
                            <button onClick={() => openLink(CONTACT.github)} className="icon-btn d-flex align-items-center justify-content-center" style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${C.panelBorder}` }}>
                                <Github size={16} style={{ color: C.textPrimary }} />
                            </button>
                            <button onClick={() => openLink(CONTACT.linkedin)} className="icon-btn d-flex align-items-center justify-content-center" style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${C.panelBorder}` }}>
                                <Linkedin size={16} style={{ color: C.textPrimary }} />
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto" }} className="px-3 px-md-5">
                {/* ---------------- HERO ---------------- */}
                <section
                    id="home"
                    ref={registerRef("home")}
                    className="d-flex flex-column-reverse flex-md-row align-items-center gap-5"
                    style={{ minHeight: "92vh", paddingTop: 110, scrollMarginTop: "90px" }}
                >
                    <div style={{ flex: "1 1 55%" }}>
                        <div
                            className="d-inline-flex align-items-center gap-2 mb-4"
                            style={{ fontSize: "0.8rem", padding: "7px 15px", borderRadius: "999px", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)" }}
                        >
                            <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#7CE28C", display: "inline-block" }} />
                            <span style={{ color: C.textMuted }}>Open to Software Developer roles</span>
                        </div>

                        <h1 className="fw-bold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.08, marginBottom: 18 }}>
                            Hi, I'm <span className="gradient-text">Pallavi Dhope</span>
                        </h1>
                        <p style={{ fontSize: "1.15rem", color: C.textMuted, maxWidth: 560, marginBottom: 30 }}>
                            Java Full-Stack Developer &amp; Computer Engineering student, crafting clean, scalable web
                            applications with <span style={{ color: C.violetSoft }}>Spring Boot</span> and{" "}
                            <span style={{ color: C.magentaSoft }}>React.js</span>.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <button
                                onClick={() => scrollTo("projects")}
                                className="glow-btn d-flex align-items-center gap-2"
                                style={{ padding: "13px 26px", borderRadius: "12px", border: "none", background: GRAD, color: "#0A0612", fontWeight: 700, fontSize: "0.95rem" }}
                            >
                                View Projects <ArrowRight size={16} />
                            </button>
                            <button
                                onClick={() => scrollTo("contact")}
                                className="ghost-btn d-flex align-items-center gap-2"
                                style={{ padding: "13px 26px", borderRadius: "12px", border: `1px solid ${C.panelBorder}`, background: "transparent", color: C.textPrimary, fontWeight: 600, fontSize: "0.95rem" }}
                            >
                                Get in Touch
                            </button>
                        </div>

                        <div className="d-flex align-items-center gap-2" style={{ color: C.textDim, fontSize: "0.85rem" }}>
                            <MapPin size={14} /> Siddhant College of Engineering, SPPU &middot; Class of 2027
                        </div>
                    </div>

                    <div style={{ flex: "0 0 auto", width: "100%", maxWidth: 220, margin: "0 auto" }}>
                        <div className="photo-ring photo-float" style={{ width: "100%", maxWidth: 200, margin: "0 auto", borderRadius: 24 }}>
                            <div style={{ position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", border: "3px solid rgba(5,3,8,0.9)", aspectRatio: "3 / 4" }}>
                                <img
                                    src={PROFILE_IMG}
                                    alt="Pallavi Dhope"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------- ABOUT ---------------- */}
                <Reveal as="section" style={{ scrollMarginTop: "90px" }}>
                    <section id="about" ref={registerRef("about")} className="py-5 mb-4">
                        <SectionEyebrow icon={Sparkles}>About Me</SectionEyebrow>
                        <div className="row g-4 align-items-center">
                            <div className="col-12 col-lg-7">
                                <h2 className="fw-bold mb-3" style={{ fontSize: "1.9rem" }}>
                                    Building things that <span className="gradient-text">actually ship</span>.
                                </h2>
                                <p style={{ color: C.textMuted, fontSize: "1.02rem", lineHeight: 1.75 }}>
                                    I'm a Computer Engineering student at Siddhant College of Engineering (SPPU), graduating in
                                    2027, with hands-on experience building full-stack web applications using Java, Spring Boot,
                                    React.js, REST APIs, MySQL, and PostgreSQL. I care about writing clean, maintainable code and
                                    I'm looking for an entry-level Software Developer role where I can contribute to real, impactful
                                    projects while continuing to grow.
                                </p>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="row g-3">
                                    {EDUCATION.map((ed) => (
                                        <div key={ed.degree} className="col-12">
                                            <GlassCard className="p-3 d-flex gap-3 align-items-start">
                                                <span className="d-flex align-items-center justify-content-center shrink-0" style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(139,92,246,0.15)" }}>
                                                    <GraduationCap size={16} style={{ color: C.violetSoft }} />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold" style={{ fontSize: "0.9rem", color: C.textPrimary }}>{ed.degree}</p>
                                                    <p className="mb-0" style={{ fontSize: "0.8rem", color: C.textDim }}>{ed.school}</p>
                                                    <p className="mb-0" style={{ fontSize: "0.78rem", color: C.textDim }}>{ed.duration}</p>
                                                </div>
                                            </GlassCard>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* ---------------- SKILLS ---------------- */}
                <Reveal style={{ scrollMarginTop: "90px" }}>
                    <section id="skills" ref={registerRef("skills")} className="py-5 mb-4">
                        <SectionEyebrow icon={Code2}>Skills</SectionEyebrow>
                        <h2 className="fw-bold mb-4" style={{ fontSize: "1.9rem" }}>
                            My <span className="gradient-text">Tech Stack</span>
                        </h2>
                        <div className="row g-4 mb-4">
                            {SKILL_GROUPS.map((g) => {
                                const Icon = g.icon;
                                return (
                                    <div key={g.title} className="col-12 col-sm-6 col-lg-3">
                                        <GlassCard className="p-4 h-100">
                                            <span className="d-flex align-items-center justify-content-center mb-3" style={{ width: 40, height: 40, borderRadius: 12, background: GRAD }}>
                                                <Icon size={19} style={{ color: "#0A0612" }} />
                                            </span>
                                            <h4 className="fw-semibold mb-3" style={{ fontSize: "1rem" }}>{g.title}</h4>
                                            <div className="d-flex flex-wrap gap-2">
                                                {g.items.map((i) => <Badge key={i}>{i}</Badge>)}
                                            </div>
                                        </GlassCard>
                                    </div>
                                );
                            })}
                        </div>
                        <GlassCard className="p-4">
                            <h4 className="fw-semibold mb-3" style={{ fontSize: "1rem" }}>Core Concepts</h4>
                            <div className="d-flex flex-wrap gap-2">
                                {CONCEPTS.map((c) => <Badge key={c} tone="magenta">{c}</Badge>)}
                            </div>
                        </GlassCard>
                    </section>
                </Reveal>

                {/* ---------------- EXPERIENCE ---------------- */}
                <Reveal style={{ scrollMarginTop: "90px" }}>
                    <section id="experience" ref={registerRef("experience")} className="py-5 mb-4">
                        <SectionEyebrow icon={Layers}>Experience</SectionEyebrow>
                        <h2 className="fw-bold mb-4" style={{ fontSize: "1.9rem" }}>
                            Professional <span className="gradient-text">Training</span>
                        </h2>
                        <GlassCard className="p-4 p-md-5">
                            <div className="d-flex flex-column flex-sm-row justify-content-between mb-4 gap-2">
                                <div>
                                    <h3 className="fw-bold mb-1" style={{ fontSize: "1.25rem" }}>{EXPERIENCE.role}</h3>
                                    <p className="mb-0" style={{ color: C.violetSoft, fontSize: "0.95rem" }}>{EXPERIENCE.company}</p>
                                </div>
                                <Badge>{EXPERIENCE.duration}</Badge>
                            </div>
                            <div>
                                {EXPERIENCE.points.map((p, i) => (
                                    <div key={p} className="d-flex gap-3 py-2" style={{ borderTop: i > 0 ? `1px solid ${C.panelBorder}` : "none" }}>
                                        <span className="d-flex align-items-center justify-content-center shrink-0 mt-1" style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(139,92,246,0.15)" }}>
                                            <ChevronRight size={12} style={{ color: C.violetSoft }} />
                                        </span>
                                        <p className="mb-0" style={{ color: C.textMuted, fontSize: "0.95rem" }}>{p}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </section>
                </Reveal>

                {/* ---------------- PROJECTS ---------------- */}
                <Reveal style={{ scrollMarginTop: "90px" }}>
                    <section id="projects" ref={registerRef("projects")} className="py-5 mb-4">
                        <SectionEyebrow icon={ExternalLink}>Projects</SectionEyebrow>
                        <h2 className="fw-bold mb-4" style={{ fontSize: "1.9rem" }}>
                            Things I've <span className="gradient-text">Built</span>
                        </h2>
                        <div className="row g-4">
                            {PROJECTS.map((p) => (
                                <div key={p.name} className="col-12 col-md-6 col-lg-4">
                                    <GlassCard className="p-4 h-100 d-flex flex-column">
                                        <h4 className="fw-semibold mb-3" style={{ fontSize: "1.05rem" }}>{p.name}</h4>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                                        </div>
                                        <ul className="ps-0 mb-4" style={{ listStyle: "none" }}>
                                            {p.points.map((pt) => (
                                                <li key={pt} className="d-flex gap-2 mb-2" style={{ fontSize: "0.87rem", color: C.textMuted }}>
                                                    <ChevronRight size={13} className="mt-1 shrink-0" style={{ color: C.magentaSoft }} />
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => openLink(CONTACT.github)}
                                            className="ghost-btn d-flex align-items-center justify-content-center gap-2 mt-auto"
                                            style={{ padding: "10px 16px", borderRadius: "10px", border: `1px solid ${C.panelBorder}`, background: "transparent", color: C.textPrimary, fontSize: "0.85rem", fontWeight: 600 }}
                                        >
                                            <Github size={14} /> View on GitHub
                                        </button>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* ---------------- CERTIFICATIONS ---------------- */}
                <Reveal style={{ scrollMarginTop: "90px" }}>
                    <section id="certifications" ref={registerRef("certifications")} className="py-5 mb-4">
                        <SectionEyebrow icon={Award}>Certifications</SectionEyebrow>
                        <h2 className="fw-bold mb-4" style={{ fontSize: "1.9rem" }}>
                            Learning <span className="gradient-text">Never Stops</span>
                        </h2>
                        <div className="row g-3">
                            {CERTS.map((c) => (
                                <div key={c} className="col-12 col-sm-6 col-lg-4">
                                    <GlassCard className="p-3 d-flex align-items-center gap-3">
                                        <span className="d-flex align-items-center justify-content-center shrink-0" style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(231,84,214,0.15)" }}>
                                            <Award size={15} style={{ color: C.magentaSoft }} />
                                        </span>
                                        <span style={{ fontSize: "0.88rem", color: C.textPrimary }}>{c}</span>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* ---------------- CONTACT ---------------- */}
                <Reveal style={{ scrollMarginTop: "90px" }}>
                    <section id="contact" ref={registerRef("contact")} className="py-5 mb-5">
                        <SectionEyebrow icon={Send}>Contact</SectionEyebrow>
                        <GlassCard className="p-4 p-md-5" hover={false} style={{ position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", inset: 0, background: GRAD, opacity: 0.08, pointerEvents: "none" }} />
                            <div className="row g-4" style={{ position: "relative" }}>
                                <div className="col-12 col-lg-6">
                                    <h2 className="fw-bold mb-3" style={{ fontSize: "1.9rem" }}>
                                        Let's build something <span className="gradient-text">great</span>.
                                    </h2>
                                    <p style={{ color: C.textMuted, marginBottom: 26 }}>
                                        Open to entry-level Software Developer roles and full-stack projects. Reach out — I reply fast.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <a
                                            href={`mailto:${CONTACT.email}`}
                                            className="glow-btn d-flex align-items-center gap-2"
                                            style={{ padding: "12px 22px", borderRadius: "10px", border: "none", background: GRAD, color: "#0A0612", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
                                        >
                                            <Mail size={15} /> Email Me
                                        </a>
                                        <a
                                            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                                            className="ghost-btn d-flex align-items-center gap-2"
                                            style={{ padding: "12px 22px", borderRadius: "10px", border: `1px solid ${C.panelBorder}`, background: "transparent", color: C.textPrimary, fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
                                        >
                                            <Phone size={15} /> Call
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="d-flex flex-column gap-3">
                                        <button
                                            onClick={copyEmail}
                                            className="ghost-btn d-flex align-items-center justify-content-between w-100"
                                            style={{ padding: "14px 18px", borderRadius: "12px", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)", color: C.textPrimary }}
                                        >
                                            <span className="d-flex align-items-center gap-2"><Mail size={15} style={{ color: C.violetSoft }} /> {CONTACT.email}</span>
                                            <span style={{ fontSize: "0.75rem", color: copied ? "#7CE28C" : C.textDim }}>{copied ? "Copied!" : "Copy"}</span>
                                        </button>
                                        <button
                                            onClick={() => openLink(CONTACT.github)}
                                            className="ghost-btn d-flex align-items-center justify-content-between w-100"
                                            style={{ padding: "14px 18px", borderRadius: "12px", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)", color: C.textPrimary }}
                                        >
                                            <span className="d-flex align-items-center gap-2"><Github size={15} style={{ color: C.violetSoft }} /> github.com/pallavid18</span>
                                            <ExternalLink size={14} style={{ color: C.textDim }} />
                                        </button>
                                        <button
                                            onClick={() => openLink(CONTACT.linkedin)}
                                            className="ghost-btn d-flex align-items-center justify-content-between w-100"
                                            style={{ padding: "14px 18px", borderRadius: "12px", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)", color: C.textPrimary }}
                                        >
                                            <span className="d-flex align-items-center gap-2"><Linkedin size={15} style={{ color: C.violetSoft }} /> linkedin.com/in/pallavi-dhope</span>
                                            <ExternalLink size={14} style={{ color: C.textDim }} />
                                        </button>
                                        <a
                                            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                                            className="ghost-btn d-flex align-items-center justify-content-between w-100"
                                            style={{ padding: "14px 18px", borderRadius: "12px", border: `1px solid ${C.panelBorder}`, background: "rgba(255,255,255,0.03)", color: C.textPrimary, textDecoration: "none" }}
                                        >
                                            <span className="d-flex align-items-center gap-2"><Phone size={15} style={{ color: C.violetSoft }} /> {CONTACT.phone}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </section>
                </Reveal>

                {/* ---------------- FOOTER ---------------- */}
                <footer className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 py-4" style={{ borderTop: `1px solid ${C.panelBorder}`, color: C.textDim, fontSize: "0.82rem" }}>
                    <span>&copy; 2026 Pallavi Dhope. Built with React.</span>
                    <div className="d-flex gap-2">
                        <button onClick={() => openLink(CONTACT.github)} className="icon-btn d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.panelBorder}` }}>
                            <Github size={14} style={{ color: C.textMuted }} />
                        </button>
                        <button onClick={() => openLink(CONTACT.linkedin)} className="icon-btn d-flex align-items-center justify-content-center" style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.panelBorder}` }}>
                            <Linkedin size={14} style={{ color: C.textMuted }} />
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}