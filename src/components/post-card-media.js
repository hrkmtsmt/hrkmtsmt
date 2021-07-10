import React from "react";
import Link from "next/link";
export const PostCardMedia = (props) => {
    const cta = "More";
    return (
        <Link href={props.slug}>
            <a className={"c-post-card"}>
                <div className={"c-post-card-image"}></div>
                <div className={"c-post-card-body"}>
                    <h3 className={"c-post-card-title"}>{props.title}</h3>
                    <div className={"c-post-card-link"}>{cta}</div>
                </div>
            </a>
        </Link>
    );
};
