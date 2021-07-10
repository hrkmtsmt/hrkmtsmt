import React from "react";
import Fade from "react-reveal/Fade";
export const Section = (props) => {
    return (
        <Fade>
            <section className={"l-grid l-inner"}>
                <div className={"l-grid-full l-flex-center"}>
                    <h2 className={"u-title-serif"}>{props.title}</h2>
                    <p className={""}>{props.copy}</p>
                </div>
                {props.children}
            </section>
        </Fade>
    );
};
