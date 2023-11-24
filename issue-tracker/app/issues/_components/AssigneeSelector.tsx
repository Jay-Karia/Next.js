"use client"
import React, {useState, useEffect} from 'react';
import {Select} from "@radix-ui/themes"
import axios from "axios";

function AssigneeSelector() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const {data} = await axios.get('/api/users');
            // @ts-ignore
            setUsers(data);
        };
        getUsers();
    }, []);


    return (
        <>
            <Select.Root>
                <Select.Trigger placeholder={"Select Assignee"}/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Select Assignee</Select.Label>
                        {users.map(({id, name}) => {
                            return (
                                <Select.Item key={id} value={id}>
                                    {name}
                                </Select.Item>
                            )
                        })}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </>
    );
}

export default AssigneeSelector;