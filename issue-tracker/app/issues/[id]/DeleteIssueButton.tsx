"use client"
import { ArchiveIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { AlertDialog } from "@radix-ui/themes";
import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const router = useRouter();
    const handleSumbit = async () => {
        try {
            setLoading(true);
            await axios.delete("/api/issues/" + issueId)
            router.push("/issues")
            router.refresh()
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }

    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button disabled={loading} color="red">
                        <ArchiveIcon />
                        Delete Issue {loading && <Spinner />}
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 450 }}>
                    <AlertDialog.Title>Delete Issue</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                        Are you sure? You want to delete this issue?
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button variant="solid" onClick={handleSumbit} color="red">
                                Yes
                            </Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                        Error occurred while deleting the issue.
                    </AlertDialog.Description>
                    <Button mt="2" color="gray" variant="soft" onClick={()=> {setError(false)}}>OK</Button>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>

    );
};

export default DeleteIssueButton;
