export interface Insight {
  id: string;
  imageUrl: string;
  title: string;
  body: string;
  author: string;
  date: string;
}

export interface NewsLetterSubscriptionPayloadModel {
  email: string;
}
