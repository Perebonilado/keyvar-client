export enum ServicesEnum {
  Data_Analytics = 0,
  UX_SEO,
  SOCIAL_MEDIA_MANAGEMENT,
}

export interface BusinessEnquiryPayloadModel {
  service: ServicesEnum;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  enquiry: string;
}
