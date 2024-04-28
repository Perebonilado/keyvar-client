import { RootState } from "@/config/redux-config";
import { formatCamelCaseToIndividualWords } from "@/utils";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AppLoader } from "@/@shared/components/AppLoader/AppLoader";

interface ContextOptions {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppLoaderContext = React.createContext<ContextOptions | null>(null);

const AppLoaderProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const businessEnquiry = useSelector(
    (state: RootState) => state["business-enquiry"]
  );
  const newInsight = useSelector((state: RootState) => state["news-insight"]);
  const career = useSelector((state: RootState) => state.career);

  const apiQueriesToWatch = Object.values({
    businessEnquiry: [
      ...Object.values(businessEnquiry.mutations),
      ...Object.values(businessEnquiry.queries),
    ],
    newsInsight: [
      ...Object.values(newInsight.mutations),
      ...Object.values(newInsight.queries),
    ],
    career: [
      ...Object.values(career.mutations),
      ...Object.values(career.queries),
    ],
  }).flat();

  const [isLoading, setLoading] = useState(false);

  const handleSetLoadingState = () => {
    const apiFetchInProgress = apiQueriesToWatch.some(
      (query) => query?.status?.toLowerCase() === "pending"
    );

    if (apiFetchInProgress) setLoading(true);
    else setLoading(false);
  };

  const handleShowErrorModal = () => {
    const errorMessages: string[] = [];
    apiQueriesToWatch.forEach((query) => {
      if (query?.error && "data" in query?.error) {
        const { message }: any = query.error.data;
        errorMessages.push(message);
      } else if (query?.error && !("data" in query?.error)) {
        errorMessages.push(
          `An error occured when trying to ${formatCamelCaseToIndividualWords(
            query?.endpointName
          )}`
        );
      }
    });

    if (errorMessages.length) {
      for (const err of errorMessages) {
        toast.error(err);
      }
    }
  };

  useEffect(() => {
    handleSetLoadingState();
    handleShowErrorModal();
  }, [JSON.stringify(apiQueriesToWatch)]);

  return (
    <AppLoaderContext.Provider value={{ setLoading }}>
      {isLoading && <AppLoader />}
      {children}
    </AppLoaderContext.Provider>
  );
};

export default AppLoaderProvider;

export const useAppLoaderContext: () => ContextOptions = () => {
  const context = React.useContext(AppLoaderContext);
  if (!context)
    throw new Error(
      "Modal context can only be used within app loader provider"
    );
  return context;
};
