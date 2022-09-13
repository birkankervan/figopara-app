import { Typography } from "@mui/material";
import InvoiceApprove from "components/InvoiceApprove";
import Layout from "components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const FaturaOnay = () => {
  const { selectedInvoices } = useSelector((state: any) => state);
  const { invoices } = selectedInvoices;
  const router = useRouter();

  useEffect(() => {
    if (invoices?.length === 0) {
      router.push("/faturalar");
    }
  }, [invoices, router]);

  if (invoices?.length === 0) return null;

  return (
    <Layout pageTitle="Fatura Onay">
      <Typography variant="h6" noWrap component="p" fontWeight={600}>
        Seçilen Faturaların Özeti
      </Typography>
      <InvoiceApprove />
    </Layout>
  );
};

export default FaturaOnay;
