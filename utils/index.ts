import { milliSecondToSecondConversionRate } from "@/constants";

export const secondsToMilliSeconds = (seconds: number): number => {
  return seconds * milliSecondToSecondConversionRate;
};

export const formatCamelCaseToIndividualWords = (camelCaseWord?: string) => {
  if (camelCaseWord) {
    return camelCaseWord.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
  }
  return "";
};
