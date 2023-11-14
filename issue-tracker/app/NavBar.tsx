import React from 'react';
import Link from "next/link";
import {FaBug} from "react-icons/fa6";

function NavBar() {
    const links = [
        {href: '/', label: 'Dashboard'},
        {href: '/issues', label: 'Issues'},
    ]
    return (
        <nav className={"flex items-center space-x-6 h-14 border-b px-5"}>
            <Link href={"/"}><FaBug/></Link>
            <ul className={"flex space-x-6"}>
                {links.map(link => (
                    <Link className={"text-zinc-500 hover:text-zinc-800"} href={link.href} key={link.href}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;