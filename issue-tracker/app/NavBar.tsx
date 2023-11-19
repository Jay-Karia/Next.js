"use client"

import React from 'react';
import Link from "next/link";
import {FaBug} from "react-icons/fa6";
import {usePathname} from "next/navigation";
import classnames from "classnames";
import {useSession} from "next-auth/react"
import {Box, DropdownMenu, Avatar} from "@radix-ui/themes"

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
                                    referrerPolicy={"no-referrer"}
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
                <div>
                    {status === "loading" && (
                        <Skeleton circle={true} height={"2rem"} width={"2rem"}/>
                    )
                    }
                </div>
                {status === "unauthenticated" && (
                    <Link href={"/api/auth/signin"}>Sign In</Link>
                )}
            </Box>
        </nav>
    );
}

export default NavBar;