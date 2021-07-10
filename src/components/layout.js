import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";

export const Layout = (props) => {
    return (
        <React.StrictMode>
            <Header />
            <main className={"l-main"}>{props.children}</main>
            <Footer />
        </React.StrictMode>
    );
};
