import React, { ReactNode } from "react";
import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

type Props = {
    href: string;
    children: ReactNode;
};

function LinkComponent(props: Props) {
    return (
        <div>
            <Link href={props.href} legacyBehavior passHref>
                <RadixLink>{props.children}</RadixLink>
            </Link>
        </div>
    );
}

export default LinkComponent;
