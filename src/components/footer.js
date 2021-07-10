import React from "react";
export const Footer = () => {
    return (
        <footer className={"l-footer"}>
            <div className={"l-footer-inner"}>
                <nav className={"l-footer-nav"}>
                    <ul className={"c-menu-list-horizonal"}>
                        <li className={"c-menu-list-item"}>
                            <a href={""} className={"c-menu-list-item-link"}>
                                <i
                                    className={
                                        "c-menu-list-item-icon ci-twitter"
                                    }
                                ></i>
                            </a>
                        </li>
                        <li className={"c-menu-list-item"}>
                            <a href={""} className={"c-menu-list-item-link"}>
                                <i
                                    className={
                                        "c-menu-list-item-icon ci-instagram"
                                    }
                                ></i>
                            </a>
                        </li>
                        <li className={"c-menu-list-item"}>
                            <a href={""} className={"c-menu-list-item-link"}>
                                <i
                                    className={
                                        "c-menu-list-item-icon ci-behance"
                                    }
                                ></i>
                            </a>
                        </li>
                        <li className={"c-menu-list-item"}>
                            <a href={""} className={"c-menu-list-item-link"}>
                                <i
                                    className={
                                        "c-menu-list-item-icon ci-dribbble"
                                    }
                                ></i>
                            </a>
                        </li>
                        <li className={"c-menu-list-item"}>
                            <a href={""} className={"c-menu-list-item-link"}>
                                <i
                                    className={
                                        "c-menu-list-item-icon ci-github"
                                    }
                                ></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className={"c-copyright"}>2021 hrkmtsmt</p>
            </div>
        </footer>
    );
};
