import type {Metadata} from "next";
import "@radix-ui/themes/styles.css";
import {Inter} from "next/font/google";
import "./globals.css";
import {Theme} from "@radix-ui/themes";
import React from "react";
import NavBar from "./NavBar";
import AuthProvider from "@/app/auth/Provider"
import QueryClientProvider from "@/app/ClientQueryProvider"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Issue Tracker",
    description: "View a summary of project issues",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <QueryClientProvider>
            <AuthProvider>
                <Theme appearance="light" accentColor="jade">
                    <NavBar/>
                    <main className={"p-5"}>{children}</main>
                </Theme>
            </AuthProvider>
        </QueryClientProvider>
        </body>
        </html>
    );
}
