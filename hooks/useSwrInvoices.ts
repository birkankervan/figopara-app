import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type QueryParams = {
  search?: string;
  invoiceId?: number | string;
};

const useSwrInvoices = ({ search, invoiceId }: QueryParams) => {
  const url = search
    ? `/api/invoices?search=${search}`
    : invoiceId
    ? `/api/invoices?invoiceId=${invoiceId}`
    : "/api/invoices";

  const { data, error } = useSWR(url, fetcher);

  return {
    invoices: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSwrInvoices;
