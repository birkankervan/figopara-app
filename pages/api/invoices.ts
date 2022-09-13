// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { InvoicesTypes } from "data/invoicesTypes";
import invoicesData from "data/invoices.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InvoicesTypes>
) {
  if (req.method === "GET") {
    const data = { ...invoicesData };
    const search = req.query.search as string;
    const invoiceId = req.query.invoiceId as string;

    if (invoiceId && invoiceId.length > 0) {
      const invoice = invoicesData.Invoices.find(
        (i) => (i.id as any) == invoiceId
      );

      return res.status(200).json(invoice as any);
    }

    if (search && search.length > 0) {
      const { Invoices: invoices } = invoicesData;
      const filteredInvoices = invoices.filter(
        (invoice) =>
          invoice.InvoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
          invoice.ReceiverName.toLowerCase().includes(search.toLowerCase()) ||
          invoice.SenderName.toLowerCase().includes(search.toLowerCase())
      );
      data["Invoices"] = filteredInvoices;
      data["TotalCount"] = filteredInvoices.length;
      return res.status(200).json(data as any);
    }

    res.status(200).send(invoicesData as any);
  }
}
