import React from 'react';
import Link from "next/link"
import {PrismaClient} from "@prisma/client"
import {redirect} from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf() as string

    if (title.length === 0) {
        return
    }
    const prisma = new PrismaClient()
    await prisma.todo.create({
        data: {
            title,
            complete: false
        }
    } as any)
    redirect("/")
}

function NewPage() {
    return (
        <>
            <header className={"flex justify-between items-center mb-4"}>
                <h1 className={"text-2xl"}>New</h1>
            </header>
            <form action={createTodo} className={"flex gap-2 flex-col"}>
                <input type={"text"} name={"title"}
                       className={"border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"}/>
                <div className={"flex gap-1 justify-end"}>
                    <Link href={".."} key={"cancel"}
                          className={"border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none h-auto"}>Cancel</Link>
                    <button type={"submit"} key={"create"}
                            className={"border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none h-auto"}>Create
                    </button>
                </div>
            </form>
        </>
    );
}

export default NewPage;