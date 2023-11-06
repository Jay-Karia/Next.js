"use client"
import React from 'react';
import Link from "next/link"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

function TodoItem({id, title, complete, toggleTodo, deleteTodo}: TodoItemProps) {
    return (
        <li className={"flex gap-4 items-center"}>
            <input id={id} type={"checkbox"} className={"form-checkbox h-5 w-5 text-slate-600 cursor-pointer peer"}
                   defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id}
                   className={"text-slate-100 cursor-pointer peer-checked:line-through peer-checked:text-slate-500"}>{title}</label>
            <button className={"cursor-pointer text-red-200"} onClick={()=>{deleteTodo(id)}}>delete</button>
        </li>
    );
}

export default TodoItem;