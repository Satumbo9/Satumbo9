import React from 'react'
import { NavLinks } from '@/lib/links'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="text-lg py-6  w-full flex justify-between items-center bg-transparent backdrop-blur-sm z-50">
            {/* LOGO */}
            <div className="text-pink-200 font-extrabold text-2xl tracking-tight hover:text-pink-400 transition-colors">
                <Link href="/">Satumbo9</Link>
            </div>

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-8 text-zinc-300 font-medium">
                {NavLinks.map((item) => (
                    <Link
                        href={item.route}
                        key={item.id}
                        className="hover:text-pink-400 transition-colors duration-200"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Nav
