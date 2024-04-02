import Container from "@/@shared/ui-components/Container";
import React, { FC, useEffect, useState } from "react";
import InsightItem from "./InsightItem";
import Button from "@/@shared/ui-components/Button";
import SubscriptionCard from "./SubscriptionCard";
import { Insight } from "@/models/Insight";

const InsightItemContainer: FC = () => {
  const [insights, setInsights] = useState<Insight[] | string[]>([]);

  useEffect(() => {
    if (dummyArticles.length) {
      dummyArticles.splice(2, 0, "subscription");

      setInsights(dummyArticles);
    }
  }, [JSON.stringify(dummyArticles)]);

  return (
    <section className="bg-[#020228]">
      <div className="bg-white rounded-t-xl py-14">
        <Container>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            {insights?.map((item, idx) => {
              return typeof item === "string" ? (
                <SubscriptionCard key={idx} />
              ) : (
                <InsightItem {...item} key={idx} />
              );
            })}
          </div>

          <div className="w-full max-w-[300px] mx-auto mt-32 mb-10">
            <Button title="View more" fullWidth />
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
] as Insight[] | string[];
