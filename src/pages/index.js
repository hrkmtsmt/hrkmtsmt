import React from "react";
import { FirstView } from "../components/top/first-view";
import { Section } from "../components/section";
import { Layout } from "../components/layout";
import { PostCard } from "../components/post-card";
import { MediaCard } from "../components/media-card";
import { LinkButton } from "../components/link-button";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home({ articles, blogs }) {
    return (
        <Layout>
            <Section title={"Introduction"} copy={"自己紹介"}>
                <Swiper
                    className={"l-grid-full"}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        0: {
                            spaceBetween: 20,
                            slidesPerView: 1.33333,
                        },
                        480: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 40,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className={""}>
                        <div className={"c-content-box"}></div>
                    </SwiperSlide>
                </Swiper>
            </Section>
            <Section title={"Works"} copy={"こんにちは"}>
                <Swiper
                    className={"l-grid-full"}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        0: {
                            spaceBetween: 20,
                            slidesPerView: 1.33333,
                        },
                        480: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 40,
                            slidesPerView: 3,
                        },
                        960: {
                            spaceBetween: 40,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id} className={""}>
                            <MediaCard
                                title={blog.title}
                                slug={`/blog/${blog.id}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Section>

            <Section title={"Blog"} copy={"こんにちは"}>
                <div className={"l-grid-full l-grid"}>
                    {articles.map((article) => (
                        <div key={article.id} className={"l-grid-small"}>
                            <PostCard
                                title={article.title}
                                category={article.category}
                                slug={`/article/${article.id}`}
                            />
                        </div>
                    ))}
                </div>
                <div className={"l-grid-full l-flex-center"}>
                    <LinkButton link={"/"} cta={"a"} />
                </div>
            </Section>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const resBlog = await fetch(
        "https://hrkmtsmt.microcms.io/api/v1/blog",
        key
    );
    const dataBlog = await resBlog.json();
    const resArticle = await fetch(
        "https://hrkmtsmt.microcms.io/api/v1/article",
        key
    );
    const dataArticle = await resArticle.json();
    return {
        props: {
            blogs: dataBlog.contents,
            articles: dataArticle.contents,
        },
    };
};
