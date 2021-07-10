import React from "react";
import Link from "next/link";
export const MediaCard = (props) => {
    const cta = "More";
    return (
        <Link href={props.slug}>
            <a className={"c-media-card"}>
                <div className={"c-media-card-inner"}>
                    <div className={"c-media-card-image"}></div>
                    <div className={"c-media-card-body"}>
                        <h3 className={"c-media-card-title"}>{props.title}</h3>
                        <div className={"c-post-card-link"}>{cta}</div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
