"use client"

import React, {useEffect} from 'react';
import Link from "next/link";
import {FaBug} from "react-icons/fa6";
import {usePathname} from "next/navigation";
import classnames from "classnames";
import {useSession} from "next-auth/react"
import {Box, Button, DropdownMenu, Avatar} from "@radix-ui/themes"
import {CaretDownIcon} from '@radix-ui/react-icons'
import Image from "next/image"

function NavBar() {

    const currentPath = usePathname()
    const {status, data: session} = useSession()

    const links = [
        {href: '/', label: 'Dashboard'},
        {href: '/issues', label: 'Issues'},
    ]

    return (
        <nav className={"flex items-center space-x-6 h-14 border-b px-5 justify-between"}>
            <Box className={"flex items-center space-x-5"}>
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
            </Box>
            <Box>
                {status === "authenticated" && (
                    <>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Avatar
                                    src={session.user!.image!}
                                    fallback={"?"}
                                    size={"2"}
                                    radius={"full"}
                                    className={"cursor-pointer"}
                                />
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>{session.user!.email!}</DropdownMenu.Item>
                                <Link href={"/api/auth/signout"}>
                                    <DropdownMenu.Item>
                                        Sign Out
                                    </DropdownMenu.Item>
                                </Link>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </>
                )}
                {status === "unauthenticated" && (
                    <Link href={"/api/auth/signin"}>Sign In</Link>
                )}
            </Box>
        </nav>
    );
}

export default NavBar;