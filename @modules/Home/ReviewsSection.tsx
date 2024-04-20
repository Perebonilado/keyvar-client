import Container from "@/@shared/ui-components/Container";
import React, { FC, useState } from "react";
import ReviewItemContainer from "./ReviewItemContainer";
import { ReviewModel } from "@/models/review";

const ReviewsSection: FC = () => {
  const [data, setData] = useState<ReviewModel[]>([
    {
      id: "1",
      isActive: true,
      title:
        "Working with Keyvar was a pivotal moment for our field engineering firm.",
      body: "Their expertise in digital marketing and data analytics helped us reach a broader audience and significantly improved our online visibility.",
      subBody:
        "The tailored content they created resonated well with our target market, and their strategic use of SEO and social media brought us to the forefront of our industry.",
      logo: "/assets/home/pattron.png",
    },
    {
      id: "2",
      isActive: false,
      title: "It’s been a game-changer for our business!",
      body: "Keyvar Solutions transformed our digital presence with their unique blend of analytics and creativity.",
      subBody:
        "Their team’s strategic approach to SEO and personalized content creation significantly boosted our online engagement. We were particularly impressed with their ability to translate complex data into actionable insights.",
      logo: "/assets/home/frannems.png",
    },
  ]);

  const handleClickCard = (data: ReviewModel[]) => {
    setData(data);
  };

  return (
    <section className="bg-[#020228] pt-16">
      <div className="bg-[#FBF9F0] rounded-t-3xl py-20 text-center">
        <Container className="relative overflow-x-hidden">
          <h2 className="text-4xl max-md:text-3xl font-semibold">
            What our clients say
          </h2>

          <div className="w-full max-w-[800px] translate-x-[30%] max-md:translate-x-[3%] mx-auto">
            <ReviewItemContainer data={data} handleClick={handleClickCard} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ReviewsSection;
