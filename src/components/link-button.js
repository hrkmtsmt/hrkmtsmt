import React from "react";
import Link from "next/link";
export const LinkButton = (props) => {
    return (
        <Link href={props.link}>
            <a className="c-button">{props.cta}</a>
        </Link>
    );
};
