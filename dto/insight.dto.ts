interface InsightSummary {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  summary: string;
  author: {
    firstName: string;
    lastName: string;
  };
  category: Category[];
  date: string;
}

interface Category {
  name: string;
  id: string;
}

export interface InsightSummaryDto {
  data: InsightSummary[];
  meta: {
    totalCount: number;
  };
}

export interface InsightDto {
  id: string;
  title: string;
  author: {
    firstName: string;
    lastName: string;
    image: string;
  };
  body: string;
}
