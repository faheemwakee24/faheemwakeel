import React, { useState, useEffect, useRef, RefObject } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Code2, Blocks, Wallet, Brain, Database, Globe, Shield, Cpu, Terminal, Layers, GitBranch, Smartphone, Building, Calendar, ArrowUpRight, Banknote, X, Menu, Package, Download } from 'lucide-react';
import naitramImage from './naitramImage.png'
import magnusmobileapp from './magnusmobileapp.png'
import GayaImage from './GayaImage.png'
import myProfileWithBlackbackground3 from './myProfileWithBlackbackground3.jpg';
import mobileAppDevelopment1 from './mobileAppDevelopment1.jpg'
import WalletCreation from './WalletCreation.jpg'
import WebApp from './WebApp.jpg'
import myCV from './Faheem Wakeel CV.pdf'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'FaheemWakeel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add useInView hook with proper typing
  const useInView = (options = {}): [RefObject<HTMLDivElement>, boolean] => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, options);

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [options]);

    return [elementRef, isInView];
  };

  const skills = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'React Native',
      desc: 'Cross-platform mobile development with optimized performance.',
      skills: ['iOS & Android', 'Native Modules', 'Performance Optimization']
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: 'Multi-Chain Wallets',
      desc: 'Development of single-chain and multi-chain wallets with secure asset management.',
      skills: ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Cross-Chain Transfers']
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: 'Web3 & DApps',
      desc: 'Building decentralized applications with blockchain integrations.',
      skills: ['Web3.js', 'Ethers.js', 'Smart Contracts', 'WalletConnect']
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: 'NFT Marketplace',
      desc: 'Development of NFT marketplaces with minting and trading functionalities.',
      skills: ['ERC-721 & ERC-1155', 'Auction System', 'IPFS Storage']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'UI/UX',
      desc: 'Designing intuitive and engaging user experiences.',
      skills: ['Responsive Design', 'Animation', 'User Research']
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a0b26] text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#693B93]/20 to-transparent pointer-events-none" />
        {/* Blur circles */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#693B93]/30 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-[#693B93]/30 rounded-full blur-[120px]" />

        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-[#693B93] to-[#9b4ed3] bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-[#9b4ed3] transition-colors">About</a>
              <a href="#experience" className="hover:text-[#9b4ed3] transition-colors">Experience</a>
              <a href="#services" className="hover:text-[#9b4ed3] transition-colors">Services</a>
              <a href="#projects" className="hover:text-[#9b4ed3] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#9b4ed3] transition-colors">Contact</a>
            </div>



            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {/* Mobile Navigation */}
          <div className={`md:hidden flex flex-col  bg-[#693B93]/80 items-center gap-4 mt-4 shadow-lg p-4 rounded-lg transition-all duration-300 backdrop-blur-md bg-white/30 ${isOpen ? "block" : "hidden"}`}>
            <a href="#about" className="hover:text-[#9b4ed3] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#9b4ed3] transition-colors">Experience</a>
            <a href="#services" className="hover:text-[#9b4ed3] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#9b4ed3] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#9b4ed3] transition-colors">Contact</a>
          </div>

        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Faheem Wakeel
                </span>
                <br />
                <span className="text-4xl text-gray-300 font-medium">
                  React Native & Web3 Developer
                </span>
                <br />
                <span className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">
                  Building the future of mobile & blockchain
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Specialized in creating seamless mobile experiences and decentralized applications
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                  Get in touch
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-3 border border-purple-500 rounded-lg text-purple-500 font-medium hover:bg-purple-500/10 transition-colors flex items-center gap-2"
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </button>
                <a href="#projects" className="px-8 py-3 bg-[#693B93]/10 rounded-lg text-[#9b4ed3] font-medium hover:bg-[#693B93]/20 transition-colors flex items-center gap-2">
                  View Projects
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#693B93] to-[#9b4ed3] rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-full overflow-hidden w-72 h-72 border-2 border-[#693B93]/20">
                <img
                  src={myProfileWithBlackbackground3}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-[#693B93]/5" />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                company: 'Safecare',
                role: 'React Native Developer',
                period: 'Jun 2023 - Mar 2024',
                description: 'Developed and optimized a cross-platform mobile app using React Native, focusing on performance, UI/UX, and API integrations.',
                achievements: [
                  'Built a mobile app with 100k+ downloads.',
                  'Optimized app performance, reducing loading time by 40%.',
                  'Integrated RESTful APIs for seamless data flow.',
                  'Implemented Redux for efficient state management.',
                  'Integrated third-party services for enhanced functionality.'
                ]

              },
              {
                company: 'Blockmob Labs',
                role: 'React Native Web3 Developer',
                period: '2024 - Present',
                description: 'Specialized in developing Web3 applications, focusing on building secure, scalable single-chain and multi-chain wallets, along with NFT marketplace integration.',
                achievements: [
                  'Developed both single-chain and multi-chain wallets, enabling seamless asset management across multiple blockchain networks.',
                  'Implemented support for Ethereum, BSC, Polygon, and Solana, allowing users to manage assets across different ecosystems.',
                  'Integrated cross-chain swaps and bridge functionalities for smooth asset transfers between networks.',
                  'Enhanced security with encrypted private key storage, biometric authentication, and WalletConnect integration.',
                  'Optimized gas fees and transaction processing, reducing costs by 30% through smart contract efficiency improvements.',
                  'Built an NFT marketplace with minting, buying, selling, and auction features, fully integrated with the multi-chain wallet.',
                  'Integrated MetaMask, WalletConnect, and custom private key storage solutions for seamless user authentication and transactions.'
                ]

              }
            ].map((exp, i) => (
              <div
                key={i}
                className="relative group bg-gradient-to-b from-[#693B93]/10 to-transparent p-8 rounded-2xl border border-[#693B93]/20 hover:border-[#693B93]/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#693B93]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#9b4ed3]">{exp.company}</h3>
                      <p className="text-lg font-semibold text-gray-200">{exp.role}</p>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9b4ed3] mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 relative">
        <div className="absolute inset-0 bg-[#693B93]/5" />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Technical Expertise</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            With extensive experience in mobile and blockchain development, I specialize in creating robust, scalable applications that bridge the gap between traditional and decentralized systems.
          </p>

          {/* Main Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {skills.map((skill, i) => {
              const [ref, isInView] = useInView({ threshold: 0.2 });
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`p-6 rounded-xl bg-gradient-to-b from-[#693B93]/10 to-transparent border border-[#693B93]/20 hover:border-[#693B93]/40 transition-colors group transform translate-y-10 opacity-0 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : ''
                    }`}
                >
                  <div className="text-[#9b4ed3] mb-4 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#9b4ed3] transition-colors">{skill.title}</h3>
                  <p className="text-gray-400 mb-4">{skill.desc}</p>
                  <ul className="space-y-2">
                    {skill.skills.map((item, j) => (
                      <li
                        key={j}
                        className={`flex items-center text-sm text-gray-300 transform translate-x-10 opacity-0 transition-all duration-700 delay-${j * 100}`}
                        style={{
                          transitionDelay: `${j * 100}ms`,
                          transform: isInView ? 'translateX(0)' : 'translateX(2rem)',
                          opacity: isInView ? 1 : 0,
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9b4ed3] mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="grid grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { icon: <Wallet className="w-5 h-5" />, label: 'Multi-Chain Wallets' },
              { icon: <Blocks className="w-5 h-5" />, label: 'Web3.js & Ethers.js' },
              { icon: <Banknote className="w-5 h-5" />, label: 'NFT Development' },
              { icon: <Shield className="w-5 h-5" />, label: 'Smart Contract Security' },
              { icon: <GitBranch className="w-5 h-5" />, label: 'Git & Version Control' },
              { icon: <Globe className="w-5 h-5" />, label: 'RESTful & GraphQL APIs' },
              { icon: <Cpu className="w-5 h-5" />, label: 'Blockchain API Integration' },
              { icon: <Database className="w-5 h-5" />, label: 'SQL & NoSQL Databases' },
              { icon: <Layers className="w-5 h-5" />, label: 'Redux & State Management' },
              { icon: <Terminal className="w-5 h-5" />, label: 'TypeScript & JavaScript' },
              { icon: <Code2 className="w-5 h-5" />, label: 'Clean & Scalable Code' }
            ].map((skill, i) => {
              const [ref, isInView] = useInView({ threshold: 0.2 });
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`flex items-center gap-2 p-3 rounded-lg bg-[#693B93]/10 hover:bg-[#693B93]/20 transition-all duration-500 transform translate-y-10 opacity-0 ${isInView ? 'translate-y-0 opacity-100' : ''
                    }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[#9b4ed3]">{skill.icon}</div>
                  <span className="text-sm">{skill.label}</span>
                </div>
              );
            })}
          </div>

          {/* Experience Level */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#693B93]/10 rounded-xl p-6 border border-[#693B93]/20">
              <h3 className="text-xl font-semibold mb-4 text-center">Experience Level</h3>
              <div className="space-y-4">
                {[
                  { skill: 'React Native Development', level: 90 },
                  { skill: 'Multi-Chain Wallet Development', level: 90 },
                  { skill: 'Web3 & Blockchain', level: 85 },
                  { skill: 'Smart Contract Integration', level: 70 },
                  { skill: 'NFT Marketplace Development', level: 80 },
                  { skill: 'API Integration & Web3.js', level: 78 },
                  { skill: 'UI/UX Design', level: 75 },
                  { skill: 'Performance Optimization', level: 75 }
                ].map((item, i) => {
                  const [ref, isInView] = useInView({ threshold: 0.2 });
                  return (
                    <div
                      key={i}
                      ref={ref}
                      className={`transform translate-y-10 opacity-0 transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : ''
                        }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">{item.skill}</span>
                        <span className="text-sm text-[#9b4ed3]">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-[#693B93]/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#693B93] to-[#9b4ed3] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isInView ? `${item.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="packages" className="py-20 relative">
        <div className="absolute inset-0 bg-[#693B93]/5" />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Open Source NPM Packages</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'react-native-fast-eth-wallet',
                description: 'A high-performance Ethereum wallet implementation for React Native applications with optimized transaction handling and secure key management.',
                url: 'https://www.npmjs.com/package/react-native-fast-eth-wallet',
                downloads: '10k+',
                tags: ['ethereum', 'wallet', 'react-native']
              },
              {
                name: 'solana-multi-wallet-kit',
                description: 'A comprehensive toolkit for integrating multiple Solana wallets into your applications with a unified API and seamless user experience.',
                url: 'https://www.npmjs.com/package/solana-multi-wallet-kit',
                downloads: '5k+',
                tags: ['solana', 'wallet', 'web3']
              }
            ].map((pkg, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-[#693B93]/10 to-transparent p-8 rounded-2xl border border-[#693B93]/20 hover:border-[#693B93]/40 transition-all duration-300 hover-lift parallax-container animate-glow"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#693B93]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative parallax-content">
                  <div className="flex items-start justify-between mb-6">
                    <Package className="w-8 h-8 text-[#9b4ed3] group-hover:scale-110 transition-transform" />
                    <div className="flex items-center gap-2 text-gray-400">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{pkg.downloads}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-3">{pkg.name}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-sm rounded-full bg-[#693B93]/10 text-[#9b4ed3] border border-[#693B93]/20 hover:bg-[#693B93]/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={pkg.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9b4ed3] hover:text-[#b974ed] transition-colors group/link"
                  >
                    View Package
                    <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Featured Projects</h2>
          <div className="space-y-40">
            {[
              {
                title: 'Gaya Wallet',
                subtitle: 'Solana-Based Single-Chain Wallet',
                desc: 'A secure and user-friendly mobile wallet exclusively for the Solana blockchain. Features include SOL token management, staking capabilities, and seamless integration with Solana-based decentralized applications (dApps).',
                image: GayaImage, // Replace with the actual image URL
                tech: ['React Native', 'Solana SDK', 'Redux'],
                link: 'https://apps.apple.com/app/gaya-wallet/id123456789' // Replace with the actual App Store link
              }, {
                title: 'Naitram',
                subtitle: 'NFT Ticketing Platform',
                desc: 'A cutting-edge platform revolutionizing event ticketing through NFT technology, ensuring secure and transparent ticket sales, and enhancing attendee experiences.',
                image: naitramImage,
                tech: ['React Native', 'Web3.js', 'Solidity'],
                link: 'https://naitram.live'
              },

              {

                title: 'magnus capital ',
                subtitle: 'Automated Trading System',
                desc: 'Automated trading bot with custom strategies and real-time market analysis. Implements advanced algorithms for market prediction and risk management.',
                image: magnusmobileapp,
                tech: ['Node.js', 'WebSocket', 'MongoDB'],
                link: '#'
              },
            ].map((project, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="flex-1 relative group perspective">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#693B93] to-[#9b4ed3] opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
                  <div className="relative transform group-hover:rotate-y-12 transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-xl shadow-2xl border border-[#693B93]/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-sm text-[#9b4ed3] font-medium mb-2 flex items-center gap-2">
                      Featured Project
                      <div className="w-12 h-[1px] bg-[#9b4ed3]" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xl text-[#9b4ed3]/80">{project.subtitle}</p>
                  </div>
                  <div className="bg-[#693B93]/10 p-6 rounded-xl backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-4 py-2 text-sm rounded-full bg-[#693B93]/10 text-[#9b4ed3] border border-[#693B93]/20 hover:border-[#693B93]/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#9b4ed3] hover:text-[#b974ed] transition-colors group"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
            {/* Services Section */}
            {/* Services Section */}

          </div>

        </div>
      </div>
      <div id="services" className="py-20 relative">

        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#9b4ed3] to-[#693B93] bg-clip-text text-transparent">
            Development Services
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg">
            Crafting digital experiences that bridge innovation and functionality
          </p>

          <div className="grid grid-cols-1 gap-20">
            {[
              {
                image: mobileAppDevelopment1,
                title: 'Mobile App Development',
                features: [
                  'Cross-platform React Native apps',
                  'Performance optimization',
                  'Native module integration',
                  'App store / playStore deployment',
                  'CI/CD pipeline setup'
                ],
                icon: <Smartphone className="w-8 h-8" />,
                gradient: 'from-[#9b4ed3]/80 to-[#693B93]/50'
              },
              {
                image: WalletCreation,
                title: 'Blockchain Solutions',
                features: [
                  'Multi-chain wallet development',
                  'Smart contract Intigerigation',
                  'NFT marketplace creation',
                  'DeFi protocol integration',
                  'Cross-chain bridges'
                ],
                icon: <Wallet className="w-8 h-8" />,
                gradient: 'from-[#693B93]/80 to-[#4a148c]/50'
              },
              {
                image: WebApp,
                title: 'Web Development',
                features: [
                  'React/Next.js applications',
                  'Web3 integration',
                  'Real-time features',
                  'SEO optimization',
                  'Cloud deployment'
                ],
                icon: <Globe className="w-8 h-8" />,
                gradient: 'from-[#9b4ed3]/80 to-[#311b92]/50'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2rem] border border-[#693B93]/30 hover:border-[#9b4ed3]/50 transition-all duration-500 shadow-xl shadow-[#693B93]/2 hover:shadow-[#9b4ed3]/20"
              >
                {/* Image Container with Dynamic Gradient */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 filter blur-sm saturate-50"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}/90 via-transparent`} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-10 min-h-[600px] flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <div className="max-w-2xl">
                    <div className="text-[#9b4ed3] mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#9b4ed3] to-white bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center text-gray-200 text-lg p-3 rounded-lg bg-[#693B93]/10 hover:bg-[#9b4ed3]/20 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#9b4ed3] mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-3 text-[#9b4ed3] font-medium hover:text-[#b974ed] transition-colors cursor-pointer">
                      <span>Explore Case Studies</span>
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '24/7', label: 'Support Available' }
            ].map((metric, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#693B93]/10 hover:bg-[#9b4ed3]/20 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#9b4ed3] to-[#693B93] bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#693B93]/10 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gray-300 mb-8">
              Interested in working together? Let's discuss your project and see how I can help.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/faheemwakee24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9b4ed3] transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/faheem-wakeel-b70770275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9b4ed3] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:faheemwakeel247@gmail.com" className="text-gray-400 hover:text-[#9b4ed3] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t border-[#693B93]/20">
        <div className="container mx-auto px-6 text-center text-gray-400">
          © {new Date().getFullYear()} Faheem wakeel. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;