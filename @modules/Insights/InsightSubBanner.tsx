import BreadCrumb from "@/@shared/components/BreadCrumb/BreadCrumb";
import Container from "@/@shared/ui-components/Container";
import DropDown from "@/@shared/ui-components/Input/DropDown";
import { useGetInsightCategoriesQuery } from "@/api-services/news-insight.service";
import { LookUp } from "@/models/Lookup";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

const InsightSubBanner: FC = () => {
  const { data: categories } = useGetInsightCategoriesQuery("");
  const [options, setOptions] = useState<LookUp[]>([]);
  const [selectedOption, setSelectedOption] = useState<LookUp | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (categories) {
      setOptions([
        { label: "All", value: "", defaultSelected: true },
        ...categories,
      ]);
    }
  }, [categories]);

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption.value) {
        router.push(`/insights?category=${selectedOption.value}`, undefined, {
          shallow: true,
        });
      } else {
        router.push("/insights", undefined, { shallow: true });
      }
    }
  }, [JSON.stringify(selectedOption)]);
  return (
    <section className="bg-[#020228] py-8 max-sm:pb-3 max-sm:pt-0">
      <Container className="max-sm:px-0">
        <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start gap-3">
          <div className="max-sm:px-5">
            <BreadCrumb />
          </div>
          <div className="w-full max-w-[300px] max-sm:max-w-full">
            <DropDown
              variant="regular"
              options={options}
              handleSelect={(val) => {
                setSelectedOption(val);
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InsightSubBanner;
