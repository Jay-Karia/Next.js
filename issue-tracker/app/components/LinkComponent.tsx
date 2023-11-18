import React, { ReactNode } from "react";
import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

type Props = {
    href: string;
    title: string;
};

function LinkComponent(props: Props) {
    return (
        <div>
            <Link href={props.href} legacyBehavior passHref>
                <RadixLink>{props.title}</RadixLink>
            </Link>
        </div>
    );
}

export default LinkComponent;
