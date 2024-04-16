import Container from "@/@shared/ui-components/Container";
import React, { FC, useEffect, useState } from "react";
import InsightItem from "./InsightItem";
import Button from "@/@shared/ui-components/Button";
import SubscriptionCard from "./SubscriptionCard";
import { useGetAllInsightsQuery } from "@/api-services/news-insight.service";
import { useRouter } from "next/router";

const InsightItemContainer: FC = () => {
  const router = useRouter();
  const [category, setCategory] = useState<string | null>(null);
  const [pageSize, setPageSize] = useState(5);
  const { data: insights } = useGetAllInsightsQuery(
    { page: 1, pageSize, category: category ?? "" },
    { skip: category === null, refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (router.query.category) {
      setCategory(router.query.category as string);
    } else {
      setCategory("");
    }
  }, [router.query]);

  const handleViewMore = () => {
    if (insights && insights.totalCount > pageSize) {
      setPageSize(() => pageSize + 5);
    }
  };

  return (
    <section className="bg-[#020228]">
      <div className="bg-white rounded-t-xl py-14">
        <Container>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
            {insights?.data.length ? (
              insights?.data.map((item, idx) => {
                // Check if it's the third index or if there are not up to 3 items
                if (
                  idx === 1 ||
                  (idx === insights.data.length - 1 && idx < 2)
                ) {
                  return (
                    <React.Fragment key={idx}>
                      <InsightItem {...item} />
                      <SubscriptionCard />
                    </React.Fragment>
                  );
                } else {
                  return <InsightItem {...item} key={idx} />;
                }
              })
            ) : (
              <SubscriptionCard />
            )}
          </div>

          <div className="w-full max-w-[300px] mx-auto mt-32 mb-10">
            {insights && insights.totalCount > pageSize ? (
              <Button title="View more" fullWidth onClick={handleViewMore} />
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default InsightItemContainer;
