import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  Linkedin,
  Download,
  Monitor,
  ChevronRight,
  Phone,
  MessageSquare
} from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between px-8 md:px-16 pointer-events-none">
    <div className="flex items-center gap-3 pointer-events-auto">
      <div className="w-10 h-10 bg-cyan-accent rounded-xl flex items-center justify-center text-deep-black font-bold shadow-lg shadow-cyan-500/20">Y</div>
      <span className="font-serif font-bold tracking-tighter text-xl hidden sm:block text-white">Yahya Ali</span>
    </div>
    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-xl px-10 py-4 rounded-full border border-white/10 shadow-xl pointer-events-auto">
      <a href="#about" className="text-white hover:text-cyan-accent transition-colors">About</a>
      <a href="#skills" className="text-white hover:text-cyan-accent transition-colors">Skills</a>
      <a href="#research" className="text-white hover:text-cyan-accent transition-colors">Research</a>
      <a href="#contact" className="text-cyan-accent hover:text-white transition-colors">Contact</a>
    </div>
  </nav>
);

const SocialIcon = ({ icon: Icon, href, index }: { icon: any, href: string, index: number }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: index * 0.2 
    }}
    whileHover={{ 
      scale: 1.2, 
      boxShadow: "0 0 20px rgba(0, 242, 242, 0.6)",
      backgroundColor: "#00f2f2",
      color: "#000000"
    }}
    className="w-10 h-10 rounded-full border border-cyan-accent flex items-center justify-center text-cyan-accent transition-all duration-300"
  >
    <Icon size={18} />
  </motion.a>
);

const TypingEffect = () => {
  const words = ["Web Developer", "I am Chemist", "Data Science Student", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-cyan-accent font-bold drop-shadow-[0_0_10px_rgba(0,242,242,0.5)]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => (
  <section className="min-h-screen grid lg:grid-cols-2 items-center section-padding relative overflow-hidden bg-deep-black">
    {/* Subtle Background Element: Glowing Keyboard simulation */}
    <div className="absolute bottom-[-10%] left-[-10%] opacity-10 pointer-events-none blur-3xl">
      <div className="w-[600px] h-[400px] bg-cyan-accent/20 rounded-full"></div>
    </div>
    <div className="absolute top-[-20%] right-[-10%] opacity-5 pointer-events-none">
      <Monitor size={800} className="text-cyan-accent rotate-12" />
    </div>

    {/* Left Column: Text-heavy */}
    <div className="relative z-10 space-y-8">
      <div className="space-y-2">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 font-medium tracking-wide"
        >
          Hello, my name is
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-serif font-bold leading-none tracking-tighter text-white"
        >
          Yahya <motion.span 
            whileHover={{ textShadow: "0 0 30px rgba(0, 242, 242, 0.8)", scale: 1.02 }}
            className="text-cyan-accent transition-all duration-300 cursor-default inline-block"
          >
            Ali
          </motion.span>
        </motion.h1>
      </div>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl md:text-4xl font-light text-white"
      >
        I'm a <TypingEffect />
      </motion.h2>

      <div className="flex gap-4 pt-4">
        <SocialIcon icon={Mail} href="mailto:yahmal141@gmail.com" index={0} />
        <SocialIcon icon={WhatsAppIcon} href="https://wa.me/255629306581" index={1} />
        <SocialIcon icon={Instagram} href="#" index={2} />
        <SocialIcon icon={Linkedin} href="https://linkedin.com/in/yahya-ali-makame" index={3} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pt-8"
      >
        <button className="px-10 py-4 bg-cyan-accent text-deep-black font-bold rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20">
          DOWNLOAD CV
        </button>
      </motion.div>
    </div>

    {/* Right Column: Visual-heavy */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex justify-center items-center mt-20 lg:mt-0"
    >
      {/* Organic Blob Shape */}
      <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
        <div className="absolute inset-0 bg-cyan-accent blob-shape glow-cyan"></div>
        
        {/* Masked Photo */}
        <div className="absolute inset-0 blob-shape overflow-hidden">
          <img 
            src="https://picsum.photos/seed/professional-man/1000/1000" 
            alt="Yahya Ali" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Accent Elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-cyan-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl rotate-12"></div>
      </div>
    </motion.div>
  </section>
);

export default function Portfolio() {
  return (
    <div className="bg-deep-black min-h-screen selection:bg-cyan-accent selection:text-deep-black">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-deep-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-cyan-accent font-mono text-sm tracking-[0.3em] uppercase">01 / Identity</span>
            <h2 className="text-5xl font-serif font-bold text-white">The Fusion of <br /><span className="italic text-cyan-accent">Science & Code</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I am <span className="text-white font-bold">Yahya Ali Makame</span>, a BSc Chemistry graduate who found a second passion in the digital realm. My journey is defined by the precision of laboratory research and the creativity of modern web development.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Based in Tanzania, I leverage my analytical background to build data-driven, high-performance web applications that solve real-world problems with scientific accuracy.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-accent/50 transition-colors group">
              <h4 className="text-cyan-accent font-bold mb-2 group-hover:scale-110 transition-transform origin-left">Precision</h4>
              <p className="text-xs text-slate-500">Meticulous attention to detail in every line of code.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyan-accent/50 transition-colors group">
              <h4 className="text-cyan-accent font-bold mb-2 group-hover:scale-110 transition-transform origin-left">Analysis</h4>
              <p className="text-xs text-slate-500">Data-driven approach to user experience and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-deep-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-cyan-accent font-mono text-sm tracking-[0.3em] uppercase">02 / Expertise</span>
            <h2 className="text-5xl font-serif font-bold text-white mt-4">Technical <span className="italic text-cyan-accent">Toolkit</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", skills: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Next.js"] },
              { title: "Data Analysis", skills: ["Statistical Analysis", "Excel Mastery", "OriginLab", "Data Visualization"] },
              { title: "Chemistry", skills: ["Analytical Chemistry", "Spectroscopy", "Lab Protocols", "Organic Synthesis"] }
            ].map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-cyan-accent/30 transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-accent"></div>
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="text-slate-500 flex items-center justify-between group/item">
                      <span className="font-light group-hover/item:text-cyan-accent transition-colors">{skill}</span>
                      <ChevronRight size={14} className="text-cyan-accent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="research" className="section-padding bg-deep-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-cyan-accent font-mono text-sm tracking-[0.3em] uppercase">03 / Projects</span>
            <h2 className="text-5xl font-serif font-bold text-white mt-4">Selected <span className="italic text-cyan-accent">Works</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Water Quality Analysis",
                desc: "Determination of Chloride in Water around Moshi Municipal, Kilimanjaro Region.",
                tag: "Research",
                img: "https://picsum.photos/seed/water-research/800/600"
              },
              {
                title: "Modern Portfolio",
                desc: "A minimalist, high-performance landing page built with React and Tailwind CSS.",
                tag: "Web Design",
                img: "https://picsum.photos/seed/web-dev/800/600"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8 border border-white/10">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1 bg-cyan-accent text-deep-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-cyan-accent transition-colors">{project.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-deep-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-cyan-accent font-mono text-sm tracking-[0.3em] uppercase">04 / Foundation</span>
            <h2 className="text-5xl font-serif font-bold text-white mt-4">Academic <span className="italic text-cyan-accent">History</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative pl-12 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-accent shadow-[0_0_15px_rgba(0,242,242,0.5)]"></div>
              <span className="text-cyan-accent font-mono text-sm mb-2 block">2020 — 2024</span>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">BSc. Chemistry</h3>
              <p className="text-slate-400 font-light">University of Excellence, Tanzania</p>
              <p className="text-slate-500 mt-4 text-sm leading-relaxed italic">
                Thesis: "Determination of Chloride in Water around Moshi Municipal, Kilimanjaro Region."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-deep-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-cyan-accent font-mono text-sm tracking-[0.3em] uppercase">05 / Contact</span>
            <h2 className="text-5xl font-serif font-bold text-white mt-4 mb-8">Get in <span className="italic text-cyan-accent">Touch</span></h2>
            <p className="text-slate-400 text-lg font-light mb-12">
              Ready to collaborate on your next scientific or digital project? Reach out and let's create something extraordinary.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:yahmal141@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-deep-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-lg text-white font-serif">yahmal141@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/255629306581" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-deep-black transition-all">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                  <p className="text-lg text-white font-serif">+255 629 306 581</p>
                </div>
              </a>
              <a href="tel:+255629306581" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-deep-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                  <p className="text-lg text-white font-serif">+255 629 306 581</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent transition-colors" />
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent transition-colors" />
              </div>
              <textarea placeholder="Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent transition-colors resize-none"></textarea>
              <button className="w-full py-5 bg-cyan-accent text-deep-black font-bold rounded-2xl hover:bg-white transition-all shadow-xl shadow-cyan-500/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 bg-deep-black">
        <p className="text-slate-500 text-sm font-light italic">© {new Date().getFullYear()} Yahya Ali Makame. All rights reserved.</p>
      </footer>
    </div>
  );
}
