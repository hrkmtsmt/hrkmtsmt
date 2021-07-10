import React from "react";

export const Header = () => {
    if (process.browser) {
        window.addEventListener("scroll", function () {
            const scroll = window.pageYOffset;
            const headerBackgound = this.document.getElementById("header");
            if (scroll > 200) {
                headerBackgound.classList.add("is-scroll");
            } else {
                headerBackgound.classList.remove("is-scroll");
            }
        });
    }
    return (
        <header id={"header"} className={"l-header"}>
            <div className={"l-header-inner"}>
                <h1 id={"header-logo"} className={"c-logo"}>
                    <a className={"c-logo-a"} href={"/"}></a>
                </h1>
                <nav className={"l-header-nav"}>
                    <div className={"c-header-menu-pc"}>
                        <ul className={"c-menu-list-horizonal"}>
                            <li className={"c-menu-list-item"}>
                                <a href={""} className={"c-menu-list-link"}>
                                    aaa
                                </a>
                            </li>
                            <li className={"c-menu-list-item"}>
                                <a href={""} className={"c-menu-list-link"}>
                                    aaa
                                </a>
                            </li>
                            <li className={"c-menu-list-item"}>
                                <a href={""} className={"c-menu-list-link"}>
                                    aaa
                                </a>
                            </li>
                        </ul>
                        <a href={"/"} className={"c-button"}>
                            ボタン
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
