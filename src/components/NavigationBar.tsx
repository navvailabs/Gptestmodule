import React, { useState } from "react";
import { Menu as UIMenu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Stethoscope, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NavigationBar() {
    const [active, setActive] = useState<string | null>(null);
    const [scrolled, setScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <>
            <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled || isMobileMenuOpen ? 'bg-primary-dark/70 backdrop-blur-lg border-b border-white/10' : 'bg-transparent')}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#" className="flex items-center space-x-3 z-50">
                            <Stethoscope className="text-accent-teal h-8 w-8" />
                            <span className="font-satoshi text-2xl font-bold text-white">GPGuide</span>
                        </a>

                        {/* Desktop Menu */}
                        <nav className="hidden md:block">
                            <UIMenu setActive={setActive}>
                                {navItems.map((item) => (
                                    <MenuItem key={item.name} setActive={setActive} active={active} item={item.name} href={item.href} />
                                ))}
                            </UIMenu>
                        </nav>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden z-50">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                                {isMobileMenuOpen ? <X className="h-7 w-7 text-white" /> : <MenuIcon className="h-7 w-7 text-white" />}
                            </button>
                        </div>

                        {/* Desktop CTA */}
                        <a href="#cta" className="hidden md:inline-block bg-warning-amber text-primary-dark font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                            Start Free Trial
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-40 bg-primary-dark/95 backdrop-blur-lg md:hidden"
                    >
                        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center space-y-8">
                            {navItems.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    className="text-2xl font-semibold text-white hover:text-accent-teal transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                             <a 
                                href="#cta" 
                                className="bg-warning-amber text-primary-dark font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Start Free Trial
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
