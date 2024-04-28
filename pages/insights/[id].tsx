import NotificationBar from "@/@modules/Insights/NotificationBar";
import ViewInsightBanner from "@/@modules/Insights/ViewInsightBanner";
import ViewInsightContentContainer from "@/@modules/Insights/ViewInsightContentContainer";
import AppHead from "@/@shared/components/AppHead";
import AppLayout from "@/@shared/layout/AppLayout";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGetInsightQuery } from "@/api-services/news-insight.service";

const ViewInsight: NextPage = () => {
  const [slug, setSlug] = useState("");
  const params = useParams();
  const { data } = useGetInsightQuery(
    { id: slug },
    { skip: !slug, refetchOnMountOrArgChange: true }
  );
  useEffect(() => {
    if (params && "id" in params) {
      setSlug(params.id as string);
    }
  }, [String(params)]);
  return (
    <>
      <AppHead title="View Insight" />
      <AppLayout bgColor="white">
        {data && (
          <ViewInsightBanner
            author={`${data.author.lastName ?? ""} ${
              data.author.firstName ?? ""
            }`}
            authorImage={data.author.image ?? ""}
            title={data.title}
          />
        )}
        <ViewInsightContentContainer blogData={data?.body ?? ""} />
        <NotificationBar />
      </AppLayout>
    </>
  );
};

export default ViewInsight;
