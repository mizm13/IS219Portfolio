'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-neutral-950/95 dark:bg-black/95 backdrop-blur-md z-50 border-b border-neutral-800/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-mono font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-mono tracking-wide transition-all duration-200 hover:text-primary-400 ${
                  pathname === item.path
                    ? 'text-primary-400 font-semibold'
                    : 'text-neutral-300'
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-neutral-300 hover:text-primary-400 hover:bg-neutral-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden hidden">
        <div className="px-4 pt-2 pb-4 space-y-2 bg-neutral-950/95 dark:bg-black/95">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-mono ${
                pathname === item.path
                  ? 'text-primary-400 bg-neutral-800/50'
                  : 'text-neutral-300 hover:bg-neutral-800/50'
              }`}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 