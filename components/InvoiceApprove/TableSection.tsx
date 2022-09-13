import { memo } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

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
};

const TableSection = () => {
  const { selectedInvoices } = useSelector((state: any) => state);
  const { invoices } = selectedInvoices;

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {Object.entries(invObj).map((item: any, index: number) => (
              <TableRow key={index + item}>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    noWrap
                    color="secondary.main"
                    fontWeight={600}
                    component="span"
                    key={index + item}
                  >
                    {item[1]}
                  </Typography>
                </TableCell>
                {invoices?.map((invoice: any) => (
                  <TableCell key={invoice.id}>
                    {typeof invoice[item[0]] === "number"
                      ? invoice[item[0]].toLocaleString("tr-TR")
                      : item[0]?.includes("Date") && invoice[item[0]]
                      ? format(
                          new Date(invoice[item[0]] as string),
                          "dd/MM/yyyy HH:mm"
                        )
                      : typeof invoice[item[0]] === "boolean"
                      ? invoice[item[0]]
                        ? "Evet"
                        : "Hayır"
                      : invoice[item[0]]?.toLocaleUpperCase("tr-TR")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default memo(TableSection);
