import React from "react";
import { PostCard } from "../../components/post-card";
import { Layout } from "../../components/layout";
export default function Post({ article }) {
    return (
        <Layout>
            <div className={"l-grid l-inner"}>
                <div className="l-grid-full">
                    <p>{article.category}</p>
                    <h2 className="c-content-box-title">{article.title}</h2>
                    <date>{article.date}</date>
                </div>
                <article className={"l-article"}>
                    <div className={"c-content-box"}>
                        <div
                            className="c-content-box-body"
                            dangerouslySetInnerHTML={{
                                __html: `${article.body}`,
                            }}
                        ></div>
                    </div>
                </article>
                <aside className={"l-sidebar"}>
                    <div className={"c-index"}>dsafs</div>
                </aside>
            </div>
            <div className={"l-grid l-inner"}>
                <div className={"l-grid-medium"}>
                    <PostCard
                        title={article.title}
                        category={article.category}
                        slug={`/article/${article.id}`}
                    />
                </div>
            </div>
        </Layout>
    );
}
export const getStaticPaths = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = await fetch("https://hrkmtsmt.microcms.io/api/v1/article", key);
    const data = await res.json();
    const paths = (data.contents || []).map((data) => `/article/${data.id}`);
    return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = await fetch(
        `https://hrkmtsmt.microcms.io/api/v1/article/${id}`,
        key
    );
    const article = await res.json();
    return {
        props: {
            article: article,
        },
    };
};
