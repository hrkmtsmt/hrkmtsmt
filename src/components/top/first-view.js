import React from "react";
export const FirstView = () => {
    return (
        <section className={"l-grid l-inner"}>
            <div className={"l-grid-full p-first-view"}>
                <div className={"l-flex-center p-first-view-column"}>
                    <div className={"p-first-view-content p-first-view-left"}>
                        <p className={""}>
                            Hello.
                            <br />
                            Nice to see you.
                            <br />
                            I’m Hiroki Matsumoto.
                        </p>
                    </div>
                </div>
                <div className={"l-flex-center p-first-view-column"}>
                    <div className={"p-circle"}>
                        <p className="c-logo"></p>
                    </div>
                </div>
                <div className={"l-flex-center p-first-view-column"}>
                    <div className={"p-first-view-content p-first-view-right"}>
                        <p className={""}>
                            Frontend and Cording
                            <br />
                            Web Design
                            <br />
                            UI/UX
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
