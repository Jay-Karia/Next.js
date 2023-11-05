import React from 'react';

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
}

function TodoItem({id, title, complete}: TodoItemProps) {
    return (
        <li className={"flex gap-1 items-center"}>
            <input id={id} type={"checkbox"} className={"form-checkbox h-5 w-5 text-slate-600 cursor-pointer peer"} />
            <label htmlFor={id} className={"text-slate-100 cursor-pointer peer-checked:line-through peer-checked:text-slate-500"}>{title}</label>
        </li>
    );
}

export default TodoItem;