import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Head from "next/head";
import { useRouter } from "next/router";
import { PostCard } from "../../components/post-card";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
dayjs.extend(utc);
dayjs.extend(timezone);
export default function Post({ work, works }) {
    const router = useRouter();
    const path = router.asPath;
    const date = dayjs.utc(work.date).tz("Asia/Tokyo").format("YYYY/MM/DD");
    return (
        <Layout>
            <Head>
                <title key={work.id}>{work.title}</title>
                <meta property="og:title" content={work.title} />
                <meta property="og:description" content={work.description} />
                <meta property="og:image" content={work.image} />
                <meta property="og:url" content={path} />
                <meta property="og:type" content={"article"} />
            </Head>
            <div className={"l-grid l-inner"}>
                <div className="l-grid-full">
                    <div className={"p-article-header"}>
                        <p className={"p-article-category"}>
                            {work.category.category}
                        </p>
                        <h1 className="p-article-title">{work.title}</h1>
                        <date timezone={date} className={"p-article-date"}>
                            {date}
                        </date>
                    </div>
                </div>
                <article className={"l-grid-article"}>
                    <div className={"p-article-body"}>
                        <div
                            className=""
                            dangerouslySetInnerHTML={{
                                __html: `${work.body}`,
                            }}
                        ></div>
                    </div>
                </article>
                <aside className={"l-grid-sidebar"}>
                    <div className={"p-index"}>dsafs</div>
                </aside>
            </div>
            <Section title={"Related Posts"}>
                {works.slice(-3).map((work) => (
                    <div key={work.id} className={"l-grid-medium"}>
                        <PostCard
                            title={work.title}
                            category={work.category.category}
                            slug={`/work/${work.id}`}
                        />
                    </div>
                ))}
            </Section>
        </Layout>
    );
}
export const getStaticPaths = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = await fetch("https://hrkmtsmt.microcms.io/api/v1/work", key);
    const data = await res.json();
    const paths = (data.contents || []).map((data) => `/work/${data.id}`);
    return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const res = [
        await fetch(`https://hrkmtsmt.microcms.io/api/v1/work/${id}`, key),
        await fetch("https://hrkmtsmt.microcms.io/api/v1/work", key),
    ];
    const work = await res[0].json();
    const works = await res[1].json();
    return {
        props: {
            work: work,
            works: works.contents,
        },
    };
};
