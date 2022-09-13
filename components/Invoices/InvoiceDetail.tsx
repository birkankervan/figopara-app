import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import useSwrInvoices from "hooks/useSwrInvoices";
import Loading from "components/Loading";
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

type InvoiceDetailProps = {
  invoiceId: number | string;
  open: boolean;
  handleClose?: () => void;
};

const InvoiceDetail = ({
  invoiceId,
  open,
  handleClose,
}: InvoiceDetailProps) => {
  const { invoices, isLoading } = useSwrInvoices({ invoiceId });

  if (isLoading || !invoices) {
    return <Loading />;
  }

  const invoiceRows = Object.entries(invoices);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Fatura no: {invoices?.InvoiceNumber?.toUpperCase()}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {invoiceRows.map(
              (entry, index) =>
                invObj.hasOwnProperty(entry[0]) && (
                  <>
                    <Box
                      key={index}
                      sx={{
                        display: { xs: "flex", sm: "grid" },
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "1fr",
                        gridColumnGap: "0px",
                        gridRowGap: "0px",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ gridArea: " 1 / 1 / 2 / 2" }}>
                        <Typography
                          variant="subtitle1"
                          noWrap
                          color="secondary.main"
                          component="span"
                        >
                          {invObj[entry[0]]}:{" "}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          gridArea: "1 / 2 / 2 / 3",
                          textAlign: { xs: "start", sm: "end" },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          noWrap
                          color="primary.main"
                          component="span"
                        >
                          {entry[0].includes("Date")
                            ? format(
                                new Date(entry[1] as string),
                                "dd/MM/yyyy HH:mm"
                              )
                            : typeof entry[1] === "number"
                            ? entry[1].toLocaleString("tr-TR")
                            : (entry[1] as any)}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider />
                  </>
                )
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Tamam
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InvoiceDetail;
