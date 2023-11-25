"use client"
import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    itemCount: number;
    pageSize: number;
    currentPage: number;
};

function Pagination({ itemCount, pageSize, currentPage }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", page.toString());
        router.push("?" + params.toString());
    };

    return (
        <Flex gap={"5"}>
            <Text>
                Page {currentPage} of {pageCount}
            </Text>
            <Flex gap={"2"}>
                <Button
                    variant={"soft"}
                    color={"gray"}
                    disabled={currentPage === 1}
                    onClick={() => changePage(1)}
                >
                    <DoubleArrowLeftIcon />
                </Button>
                <Button
                    variant={"soft"}
                    color={"gray"}
                    disabled={currentPage === 1}
                    onClick={() => changePage(currentPage - 1)}
                >
                    <ArrowLeftIcon />
                </Button>
                <Button
                    variant={"soft"}
                    color={"gray"}
                    disabled={currentPage === pageCount}
                    onClick={() => changePage(currentPage + 1)}
                >
                    <ArrowRightIcon />
                </Button>
                <Button
                    variant={"soft"}
                    color={"gray"}
                    disabled={currentPage === pageCount}
                    onClick={() => changePage(pageCount)}
                >
                    <DoubleArrowRightIcon />
                </Button>
            </Flex>
        </Flex>
    );
}

export default Pagination;
