import useSwrInvoices from "hooks/useSwrInvoices";
import { useState } from "react";

import Searchbar from "./Searchbar";
import TableSection from "./Table";

const Invoices = () => {
  const [search, setSearch] = useState("");
  const { invoices, isLoading } = useSwrInvoices({ search });

  return (
    <>
      <Searchbar setSearch={setSearch} />
      <TableSection invoices={invoices} isLoading={isLoading} />
    </>
  );
};

export default Invoices;
