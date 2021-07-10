import React from "react";
import { PostCard } from "../../components/post-card";
import { Layout } from "../../components/layout";
export default function Post({ blog }) {
    return (
        <Layout>
            <div className={"l-grid l-inner"}>
                <div className="l-grid-full">
                    <p>{blog.category}</p>
                    <h2 className="c-content-box-title">{blog.title}</h2>
                    <date>{blog.date}</date>
                </div>
                <article className={"l-article"}>
                    <div className={"c-content-box"}>
                        <div
                            className="c-content-box-body"
                            dangerouslySetInnerHTML={{
                                __html: `${blog.body}`,
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
                        title={blog.title}
                        category={blog.category}
                        slug={`/blog/${blog.id}`}
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
    const res = await fetch("https://hrkmtsmt.microcms.io/api/v1/blog", key);
    const data = await res.json();
    const paths = (data.contents || []).map((data) => `/blog/${data.id}`);
    return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = await fetch(
        `https://hrkmtsmt.microcms.io/api/v1/blog/${id}`,
        key
    );
    const blog = await res.json();
    return {
        props: {
            blog: blog,
        },
    };
};
