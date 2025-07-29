'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FlaskConical, 
  Shield, 
  Leaf, 
  Brain, 
  TrendingUp, 
  Globe, 
  Users, 
  Building2,
  TestTube,
  Database,
  BarChart3,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Crown,
  Star,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Sparkles,
  Briefcase,
  GraduationCap,
  Microscope,
  Cpu,
  Network,
  Activity,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

// Animated components
const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Premium Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl pulse-glow">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white text-shadow-glow">Toxic Trace</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">About</button>
            <button onClick={() => scrollToSection('product')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">Product</button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">Team</button>
            <button onClick={() => scrollToSection('applications')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">Applications</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">How It Works</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer">Contact</button>
            <button className="premium-button">
              Get Started
            </button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-black/20 backdrop-blur-lg rounded-lg border border-white/20"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
                          <button onClick={() => scrollToSection('about')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">About</button>
            <button onClick={() => scrollToSection('product')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">Product</button>
            <button onClick={() => scrollToSection('team')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">Team</button>
            <button onClick={() => scrollToSection('applications')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">Applications</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">How It Works</button>
            <button onClick={() => scrollToSection('contact')} className="text-white md:hover:text-blue-300 transition-colors cursor-pointer text-left">Contact</button>
              <button className="premium-button">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-slate-900/95"></div>
      
      {/* Floating orbs - inspired by the reference website */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`floating-orb ${i % 2 === 0 ? 'floating-orb-large' : 'floating-orb-cyan'}`}
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Large hero orbs */}
      <motion.div
        className="hero-orb"
        style={{ left: '10%', top: '30%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hero-orb-small"
        style={{ right: '15%', top: '40%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hero-orb-medium"
        style={{ left: '70%', bottom: '30%' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Premium Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl pulse-glow">
              <FlaskConical className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </motion.div>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-black/20 backdrop-blur-lg border border-white/20 rounded-full">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
              <span className="text-blue-300 font-semibold text-sm md:text-base">AI-Powered Forensic Technology</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white"
          >
            Uncovering Hidden Traces with{" "}
            <span className="text-cyan-400 text-shadow-glow">AI-powered</span> Wastewater Drug Detection
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering public health and forensic science through sustainable, privacy-respecting innovation
          </motion.p>
          

          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">21+</div>
              <div className="text-gray-400 text-sm md:text-base">Drugs Detected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm md:text-base">Privacy Respecting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">AI</div>
              <div className="text-gray-400 text-sm md:text-base">Powered Analysis</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="ai-futuristic-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
              <Crown className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">About Toxic Trace</span>
            </div>
            <h2 className="ai-futuristic-header">
              <span className="gradient-text-primary">Revolutionizing</span>
              <br />
              <span className="gradient-text-secondary">Forensic Science</span>
            </h2>
            <p className="ai-futuristic-subheader">
              Toxic Trace is an innovative and forward-thinking forensic and environmental toxicity company 
              dedicated to the detection and monitoring of illicit drugs and toxic substances in complex 
              environmental matrices, especially sewage and wastewater.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ai-futuristic-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 premium-glass rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold gradient-text-primary">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower public health systems, forensic experts, and environmental agencies with 
                accurate, science-based monitoring solutions that respect privacy while providing 
                unprecedented insights into community health patterns.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="ai-futuristic-card text-center">
                <div className="w-16 h-16 premium-glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Privacy First</h4>
                <p className="text-gray-400 text-sm">Non-invasive testing that protects individual privacy</p>
              </div>
              <div className="ai-futuristic-card text-center">
                <div className="w-16 h-16 premium-glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Eco-Friendly</h4>
                <p className="text-gray-400 text-sm">Sustainable materials and processes</p>
              </div>
              <div className="ai-futuristic-card text-center">
                <div className="w-16 h-16 premium-glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">AI-Powered</h4>
                <p className="text-gray-400 text-sm">Advanced machine learning algorithms</p>
              </div>
              <div className="ai-futuristic-card text-center">
                <div className="w-16 h-16 premium-glass rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Science-Based</h4>
                <p className="text-gray-400 text-sm">Rigorous scientific methodology</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Product Section
const ProductSection = () => {
  const features = [
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Detects 21+ Drugs",
      description: "Covers priority drug residues including opioids, stimulants, cannabinoids, and synthetic drugs",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "LC-MS/MS, GC-MS, HPLC Compatible",
      description: "Supports detection via LC-MS/MS, GC-MS, and HPLC methods with pre-validated workflows",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Pre-validated Workflows",
      description: "Ready-to-use protocols for sewage and raw wastewater analysis with high sensitivity",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Real-time analysis and pattern recognition for predictive insights and trend mapping",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Biodegradable Design",
      description: "Replaces single-use plastics with biodegradable or recyclable alternatives",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy-Respecting",
      description: "Non-invasive community drug use monitoring via wastewater-based epidemiology (WBE)",
      gradient: "from-purple-400 to-pink-400"
    }
  ]

  return (
    <AnimatedSection id="product" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Rocket className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Our Technology</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">ToxiSew™</span>
            <br />
            <span className="gradient-text-secondary">Kit</span>
          </h2>
          <p className="ai-futuristic-subheader">
            "Uncovering Invisible Drug Contaminants, Supporting Public Health." 
            A scientifically advanced kit designed for extracting, concentrating, and analyzing illicit drugs 
            and their metabolic by-products in sewage water.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group ai-futuristic-card hover:scale-105 transition-all duration-500"
            >
              <div className={`w-16 h-16 premium-glass rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Team Section
const TeamSection = () => {
  const team = [
    {
      name: "UBAID ULLAH KHAN",
      role: "CEO",
      description: "CEO & founder, bringing expertise in forensic science and public health to lead the company's strategy, partnerships, and research in environmental diagnostics.",
      image: "/team/Ubaid Ullah Khan.jpeg"
    },
    {
      name: "ZEESHAN ABBAS",
      role: "FINANCE DIRECTOR",
      description: "Oversees financial operations, budgeting, resource allocation, and sustainability, ensuring cost-effectiveness and compliance with global funding standards.",
      image: "/team/zeeshan Abbas.jpg"
    },
    {
      name: "MUHAMMAD SALMAN",
      role: "IT DIRECTOR",
      description: "Manages IT infrastructure, app development, and web platforms, ensuring seamless digital operations and user experience.",
      image: "/team/Muhammad Salman.JPG"
    },
    {
      name: "ZESHAN YOUNAS ABBASI",
      role: "SALES DIRECTOR",
      description: "Leads sales campaigns, distributor partnerships, and customer acquisition to ensure the ToxiSew™ kit reaches key institutions.",
      image: "/team/zeshan younas abbasi.jpg"
    },
    {
      name: "ABDUL WAHAB",
      role: "TECHNICAL DIRECTOR",
      description: "Leads research, product development, training, and troubleshooting, ensuring scientific rigor through expertise in analytical instrumentation.",
      image: "/team/Abdul Wahab.jpg"
    }
  ]

  return (
    <AnimatedSection id="team" className="ai-futuristic-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Crown className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Leadership Team</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">Driving Innovation</span>
            <br />
            <span className="gradient-text-secondary">and Impact</span>
          </h2>
          <p className="ai-futuristic-subheader">
            Meet the visionary leaders behind Toxic Trace, driving innovation and impact in forensic science.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="team-card group"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-cyan-400/30 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-bold mb-2 text-white">{member.role}</h3>
              <h4 className="text-lg font-bold mb-4 gradient-text-primary">{member.name}</h4>
              <p className="text-gray-300 text-xs leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Applications Section
const ApplicationsSection = () => {
  const applications = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Forensic Labs",
      description: "Advanced analytical capabilities for criminal investigations and evidence analysis",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Environmental Agencies",
      description: "Comprehensive monitoring of water quality and environmental impact assessment",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Research Institutions",
      description: "Cutting-edge tools for academic research and public health studies",
      gradient: "from-blue-400 to-cyan-400"
    }
  ]

  return (
    <AnimatedSection id="applications" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Target className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Applications</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">Serving</span>
            <br />
            <span className="gradient-text-secondary">Multiple Sectors</span>
          </h2>
          <p className="ai-futuristic-subheader">
            Our technology serves diverse sectors with specialized solutions for each application area.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="ai-futuristic-card text-center group hover:scale-105 transition-all duration-500"
            >
              <div className={`w-20 h-20 premium-glass rounded-3xl flex items-center justify-center mx-auto mb-8 bg-gradient-to-r ${app.gradient} bg-clip-text`}>
                <div className="text-white">
                  {app.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">{app.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Wastewater Collection",
      description: "Sample collection using our specialized ToxiSew™ kits from municipal systems",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Advanced AI algorithms process data for real-time pattern recognition",
      icon: <Brain className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Data Reporting",
      description: "Comprehensive reports with actionable insights for authorities and researchers",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const drugList = ["Cocaine", "Heroin", "Methamphetamine", "Fentanyl", "THC", "Benzodiazepines", "Barbiturates", "Tricyclic Antidepressants"]

  return (
    <AnimatedSection id="how-it-works" className="ai-futuristic-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Lightbulb className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">How It Works</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">Streamlined</span>
            <br />
            <span className="gradient-text-secondary">Process</span>
          </h2>
          <p className="ai-futuristic-subheader">
            Our streamlined process delivers accurate results while maintaining privacy and sustainability.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="ai-futuristic-card text-center relative"
            >
              <div className="text-6xl font-bold gradient-text-primary/20 mb-6">{step.number}</div>
              <div className="w-12 h-12 premium-glass rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-cyan-400">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-10 h-10 text-cyan-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="ai-futuristic-card max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text-primary">
            Detected Substances
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {drugList.map((drug, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 text-center hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/30"
              >
                <span className="text-white font-bold text-sm">{drug}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Sustainable Impact Section
const SustainableImpactSection = () => {
  return (
    <AnimatedSection className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Leaf className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Sustainable Impact</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">Environmental</span>
            <br />
            <span className="gradient-text-secondary">Responsibility</span>
          </h2>
          <p className="ai-futuristic-subheader">
            Our commitment to environmental responsibility and privacy protection.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ai-futuristic-card text-center group hover:scale-105 transition-all duration-500"
          >
            <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">Privacy-Respecting</h3>
            <p className="text-gray-300 text-base leading-relaxed">Non-invasive testing that protects individual privacy while providing community-level insights.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="ai-futuristic-card text-center group hover:scale-105 transition-all duration-500"
          >
            <Leaf className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">Eco-Toxicological Compliance</h3>
            <p className="text-gray-300 text-base leading-relaxed">Meets all environmental guidelines and standards for safe wastewater analysis.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="ai-futuristic-card text-center group hover:scale-105 transition-all duration-500"
          >
            <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 text-white">UN SDGs Support</h3>
            <p className="text-gray-300 text-base leading-relaxed">Contributes to United Nations Sustainable Development Goals for clean water and public health.</p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <AnimatedSection className="ai-futuristic-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 premium-glass rounded-full mb-8">
            <Star className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Our Vision</span>
          </div>
          <h2 className="ai-futuristic-header">
            <span className="gradient-text-primary">Building a</span>
            <br />
            <span className="gradient-text-secondary">Better Future</span>
          </h2>
          
          <div className="ai-futuristic-card max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-3xl text-center leading-relaxed mb-8"
            >
              "Together, we uncover the hidden traces, support evidence-based policymaking, 
              and build a <span className="gradient-text-primary">safer, healthier world</span>."
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 text-cyan-400">
                <TrendingUp className="w-6 h-6" />
                <span className="text-xl font-bold">Backed by science. Driven by purpose.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Footer
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <footer id="contact" className="py-16 bg-gradient-to-b from-slate-950 to-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 premium-glass rounded-xl flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-3xl font-bold gradient-text-primary">Toxic Trace</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-base leading-relaxed">
              Empowering public health and forensic science through sustainable, 
              privacy-respecting innovation.
            </p>
            <p className="text-gray-400 text-base">
              Backed by science. Driven by purpose.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-base cursor-pointer text-left">About</button></li>
              <li><button onClick={() => scrollToSection('product')} className="text-gray-300 hover:text-cyan-400 transition-colors text-base cursor-pointer text-left">Product</button></li>
              <li><button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-cyan-400 transition-colors text-base cursor-pointer text-left">Team</button></li>
              <li><button onClick={() => scrollToSection('applications')} className="text-gray-300 hover:text-cyan-400 transition-colors text-base cursor-pointer text-left">Applications</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-cyan-400 transition-colors text-base cursor-pointer text-left">How It Works</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-base text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@toxictrace.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-base">
            © 2024 Toxic Trace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TeamSection />
      <ApplicationsSection />
      <HowItWorksSection />
      <SustainableImpactSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 