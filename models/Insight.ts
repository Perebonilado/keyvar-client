export interface InsightSummaryModel {
  id: string;
  imageUrl: string;
  title: string;
  body: string;
  author: string;
  date: string;
  category: string;
}

export interface NewsLetterSubscriptionPayloadModel {
  email: string;
}

export interface InsightSummaryModelResponse {
  data: InsightSummaryModel[];
  totalCount: number;
  nextPage: number | null;
}

export interface GetAllInsightsQueryModel {
  pageSize: number;
  page: number;
  category?: string;
}

export interface InsightModel {
  id: string;
  title: string;
  author: {
    firstName: string;
    lastName: string;
    image: string;
  };
  body: string;
}

export interface InsightQueryModel {
  id: string;
}
