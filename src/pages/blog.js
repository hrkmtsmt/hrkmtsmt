import React from "react";
import { Section } from "../components/section";
import { Layout } from "../components/layout";
import { PostCard } from "../components/post-card";

import { LinkButton } from "../components/link-button";

export default function Home({ blogs }) {
    return (
        <Layout>
            <Section title={"Blog"} copy={""}>
                <div className={"l-grid-full l-grid"}>
                    {blogs.map((blog) => (
                        <div key={blog.id} className={"l-grid-small"}>
                            <PostCard
                                title={blog.title}
                                category={blog.category.category}
                                slug={`/blog/${blog.id}`}
                            />
                        </div>
                    ))}
                </div>
                <div className={"l-grid-full l-flex-center"}>
                    <LinkButton link={"/blog"} cta={"a"} />
                </div>
            </Section>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = await fetch("https://hrkmtsmt.microcms.io/api/v1/blog", key);
    const data = await res.json();
    return {
        props: {
            blogs: data.contents,
        },
    };
};
