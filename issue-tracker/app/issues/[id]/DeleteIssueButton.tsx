"use client"
import { ArchiveIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import { AlertDialog } from "@radix-ui/themes";
import React from "react";
import prisma from "@/prisma/client"

const DeleteIssueButton = async ({ issueId }: { issueId: number }) => {

    return (

        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color="red">
                    <ArchiveIcon />
                    Delete Issue
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
                        <Button variant="solid" color="red">
                            Yes
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>

    );
};

export default DeleteIssueButton;
