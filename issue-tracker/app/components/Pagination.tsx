import React from 'react';
import {Flex, Text, Button} from "@radix-ui/themes"
import {ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons"

type PaginationProps = {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

function Pagination({itemCount, pageSize, currentPage}: PaginationProps) {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;

    return (
        <Flex gap={"5"}>
            <Text>Page {currentPage} of {pageCount}</Text>
            <Flex gap={"2"}>
                <Button variant={"soft"} color={"gray"} disabled={currentPage === 1}>
                    <DoubleArrowLeftIcon />
                </Button>
                <Button variant={"soft"} color={"gray"} disabled={currentPage === 1}>
                    <ArrowLeftIcon />
                </Button>
                <Button variant={"soft"} color={"gray"} disabled={currentPage === pageCount}>
                    <ArrowRightIcon />
                </Button>
                <Button variant={"soft"} color={"gray"} disabled={currentPage === pageCount}>
                    <DoubleArrowRightIcon />
                </Button>
            </Flex>

        </Flex>
    );
}

export default Pagination;