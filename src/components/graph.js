import React from "react";

export const Graph = () => {
    return (
        <div className={"c-graph"}>
            <div className={"c-graph-body"}>
                <p className={"c-graph-label"}>{props.title}</p>
                <p className={"c-graph-value"}>{props.num}</p>
            </div>
            <div className={"c-graph-backgroud"}>
                <div className={"c-graph-bar"}></div>
            </div>
        </div>
    );
};
