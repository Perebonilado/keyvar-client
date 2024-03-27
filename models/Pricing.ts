export type PricingCategory = "individual" | "tailored";

export interface PricingPlan {
  title: string;
  service: string;
  idealFor: string;
  price: string;
  category: PricingCategory;
}
