import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
import s from "./styles.module.css";
import DataAnalyticsIcon from "@/icons/DataAnalyticsIcon";
import SEOIcon from "@/icons/SEOIcon";
import SocialMediaManagementIcon from "@/icons/SocialMediaManagementIcon";
import ServiceCardContainer from "../ServiceCardContainer";
import Button from "@/@shared/ui-components/Button";
import Link from "next/link";
import { NavLinks } from "@/@shared/constants";
import WorkShopIcon from "@/icons/WorkShopIcon";

const HelpClients: FC = () => {
  return (
    <div className="bg-[#020228] text-white" id="services">
      <Container className={`${s.bg} min-h-screen relative py-24`}>
        <h2 className="text-center text-4xl max-md:text-3xl font-semibold">
          How we help clients
        </h2>
        <p className="text-center w-full max-w-[500px] mt-6 mx-auto">
          Clients are offered a range of services that are guaranteed to have
          great impact in returns.
        </p>
        <ServiceCardContainer data={data} />

        <p className="text-white text-center text-sm absolute bottom-8 left-1/2 -translate-x-1/2 w-full">
          {" "}
          I see a service i'm interested in:
        </p>

        <Link href={NavLinks.pricing.link}>
          <Button
            title="View pricing"
            size="large"
            className="!w-[300px] !py-2 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        </Link>
      </Container>
    </div>
  );
};

export default HelpClients;

const data = [
  {
    title: "Data & Analytics",
    content: [
      "Gain insights into customer preferences to tailor marketing efforts.",
      "Providing detailed analytics for comprehensive campaign performance understanding",
      "Employing ML algorithms for market trends and prediction.",
    ],
    icon: <DataAnalyticsIcon />,
  },
  {
    title: "Search Engine Optimization",
    content: [
      "Full SEO and UX audits on your website to improve overall customer experience.",
      "Provide feedback, suggestions on content relevant to your customer base.",
      "Increase organic traffic to your website by improving visibility and ranking in search.",
    ],
    icon: <SEOIcon />,
  },
  {
    title: "Social Media Management",
    content: [
      "Increase brand awareness through social media campaigns.",
      "Manage and improve engagement with customers.",
      "Employ best practices to organically capture customer attention on their various social feeds.",
    ],
    icon: <SocialMediaManagementIcon />,
  },
  {
    title: "Trainings and Workshops",
    content: [
      `Use SEO and UX audits (Google Search Console, Ahrefs) to improve customer experience and boost brand awareness on TikTok, Facebook, Instagram, and LinkedIn.`,
      `Develop skills to analyze data and optimize marketing with Google Analytics, Tableau, and machine learning.`,
      `Comprehensive training in cloud computing (AWS, Azure), network administration, help desk support, access control, and software development.`,
    ],
    icon: (
      <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#fbfbf3]">
        <WorkShopIcon />
      </div>
    ),
  },
];
