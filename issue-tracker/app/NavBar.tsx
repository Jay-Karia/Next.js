"use client"

import React from 'react';
import Link from "next/link";
import {FaBug} from "react-icons/fa6";
import {usePathname} from "next/navigation";
import classnames from "classnames";

function NavBar() {

    const currentPath = usePathname()

    const links = [
        {href: '/', label: 'Dashboard'},
        {href: '/issues', label: 'Issues'},
    ]

    return (
        <nav className={"flex items-center space-x-6 h-14 border-b px-5"}>
            <Link href={"/"}><FaBug/></Link>
            <ul className={"flex space-x-6"}>
                {links.map(link => (
                    <Link className={classnames({
                        "text-zinc-900": currentPath === link.href,
                        "text-zinc-500": currentPath !== link.href,
                        "hover:text-zinc-800 transition-colors": true,
                    })} href={link.href} key={link.href}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;