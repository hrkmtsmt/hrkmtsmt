import React from "react";
import { FirstView } from "../components/top/first-view";
import { Section } from "../components/section";
import { Layout } from "../components/layout";
import { PostCard } from "../components/post-card";
import { MediaCard } from "../components/media-card";
import { LinkButton } from "../components/link-button";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home({ blogs, works, intro }) {
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
                        576: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 40,
                            slidesPerView: 3,
                        },
                    }}
                >
                    {intro.map((intro) => (
                        <SwiperSlide key={intro.title} className={""}>
                            <div className={"c-box"}>
                                {intro.title}
                                {intro.description}
                            </div>
                        </SwiperSlide>
                    ))}
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
                        576: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 40,
                            slidesPerView: 3,
                        },
                        992: {
                            spaceBetween: 40,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {works.slice(-10).map((work) => (
                        <SwiperSlide key={work.id} className={""}>
                            <MediaCard
                                title={work.title}
                                slug={`/work/${work.id}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Section>
            <Section title={"Blog"} copy={"こんにちは"}>
                <div className={"l-grid-full l-grid"}>
                    {blogs.slice(-4).map((blog) => (
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
    const res = [
        await fetch("https://hrkmtsmt.microcms.io/api/v1/work", key),
        await fetch("https://hrkmtsmt.microcms.io/api/v1/blog", key),
        await fetch("https://hrkmtsmt.microcms.io/api/v1/feature/intro", key),
    ];
    const data = [
        await res[0].json(),
        await res[1].json(),
        await res[2].json(),
    ];
    return {
        props: {
            works: data[0].contents,
            blogs: data[1].contents,
            intro: data[2].body,
        },
    };
};
