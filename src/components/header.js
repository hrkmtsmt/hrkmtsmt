import React from "react";
import Link from "next/link";
import { LinkButton } from "../components/link-button";
import Head from "next/head";
export const Header = () => {
    if (process.browser) {
        window.addEventListener("scroll", function () {
            const scroll = window.pageYOffset;
            const headerBackgound = this.document.getElementById("header");
            if (scroll > 400) {
                headerBackgound.classList.add("is-scroll");
            } else {
                headerBackgound.classList.remove("is-scroll");
            }
        });
    }
    return (
        <header id={"header"} className={"l-header"}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta property="og:locale" content="ja_JP" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hrkmtsmt" />
                <meta property="og:site_name" content="hrkmtsmt" />
                <meta property="fb:app_id" content="189027196570007" />
            </Head>
            <div className={"l-header-inner"}>
                <h1 id={"header-logo"} className={"c-logo"}>
                    <Link href={"/"}>
                        <a className={"c-logo"}>hrkmtsmt</a>
                    </Link>
                </h1>
                <nav className={"l-header-nav"}>
                    <div className={"c-header-menu-pc"}>
                        <ul className={"c-menu-list-horizonal"}>
                            <li className={"c-menu-list-item"}>
                                <Link href={"sdf"}>
                                    <a className={"c-menu-list-link"}>aaa</a>
                                </Link>
                            </li>
                        </ul>
                        <LinkButton link={"/"} cta={"a"} />
                    </div>
                </nav>
            </div>
        </header>
    );
};
