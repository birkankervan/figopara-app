import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";

const invObj: any = {
  InvoiceNumber: "Fatura No",
  SenderName: "Gönderici Adı",
  ReceiverName: "Alıcı Adı",
  PayableAmount: "Ödenebilen Tutar",
  RemainingAmount: "Kalan Tutar",
  ApprovedPayableAmount: "Onaylanan Ödenebilir Tutar",
  PayableAmountCurrency: "Ödenebilen Tutar Para Birimi",
  IssueDate: "Fatura Tarihi",
  InsertedDate: "Fatura Oluşturulma Tarihi",
  IsGibApproved: "GİB Onayı",
  GibApproveDate: "GİB Onay Tarihi",
  TaxFreeAmount: "KDV Hariç Tutar",
};

const InvoiceApprove = () => {
  const { selectedInvoices } = useSelector((state: any) => state);
  const { invoices } = selectedInvoices;

  return (
    <div>
      <Box
        sx={{
          display: { xs: "flex", sm: "grid" },
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "1fr",
          gridColumnGap: "0px",
          gridRowGap: "0px",
          flexDirection: "column",
        }}
      >
        {invoices.map((invoice: any, index: any) => {
          const invoiceRows = Object.keys(invoice);
         
          return invoiceRows.map((row: any, i: any) => {
            if (!invObj.hasOwnProperty(row)) {
              return null;
            }
            if (index > 0) {
              return (
                <Box
                  key={i}
                  sx={{
                    gridArea: ` 1 / ${index} / 2 / ${index + 1}`,
                    textAlign: { xs: "start", sm: "end" },
                  }}
                >
                  <Typography
                    variant="h6"
                    noWrap
                    color="primary.main"
                    component="span"
                  >
                    {row.includes("Date")
                      ? format(
                          new Date(invoice[row] as string),
                          "dd/MM/yyyy HH:mm"
                        )
                      : invoice[row]}
                  </Typography>
                </Box>
              );
            }

            return (
              <>
                <Box sx={{ gridArea: ` 1 / ${index} / 2 / ${index + 1}` }}>
                  <Typography
                    variant="h6"
                    noWrap
                    color="secondary.main"
                    component="span"
                    fontWeight={600}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      color="secondary.main"
                      component="p"
                      fontWeight={600}
                      key={i}
                    >
                      {invObj[row]}
                    </Typography>
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  color="primary.main"
                  component="p"
                  fontWeight={600}
                  key={i}
                >
                  {invoice[row]}
                </Typography>
              </>
            );
          });
        })}
      </Box>
    </div>
  );
};

export default memo(InvoiceApprove);
