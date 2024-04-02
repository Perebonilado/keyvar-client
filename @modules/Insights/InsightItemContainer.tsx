import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import InsightItem from "./InsightItem";
import Button from "@/@shared/ui-components/Button";

const InsightItemContainer: FC = () => {
  return (
    <section className="bg-[#020228]">
      <div className="bg-white rounded-t-xl py-14">
        <Container>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">

            {dummyArticles.map((art, idx)=>{
              return <InsightItem {...art} key={idx}/>
            })}
          </div>

          <div className="w-full max-w-[300px] mx-auto mt-32 mb-10">
            <Button title="View more" fullWidth/>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default InsightItemContainer;

const dummyArticles = [
  {
    imageUrl: "/assets/shared/article-pic.jpg",
    title:
      "The impact of Multicollinearity in Marketing Mix Modeling: The Role of Ridge Regression",
    body: "In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is para In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is",
    author: "Kalada Nemieboka",
    date: "December 28, 2023",
  },
  {
    imageUrl: "/assets/shared/article-pic.jpg",
    title: "Copywriting for social media",
    body: "In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is para In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is",
    author: "Gloria Ogordi",
    date: "December 28, 2023",
  },
  {
    imageUrl: "/assets/shared/article-pic.jpg",
    title: "Useful tips for avoiding multicollinearity",
    body: "In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is para In the ever-evolving landscape of marketing, understanding the effectiveness of your strategies is",
    author: "Gloria Ogordi",
    date: "December 28, 2023",
  },
];
