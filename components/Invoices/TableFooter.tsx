import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { memo, useState } from "react";
import AlertModal from "./AlertModal";
import { useDispatch } from "react-redux";
import { setInvoices } from "features/invoices/invoiceSlice";
import { useRouter } from "next/router";

const TableFooter = ({ selectedInvoices }: any) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const totalAmount = selectedInvoices.reduce(
    (acc: any, invoice: any) => acc + invoice.PayableAmount,
    0
  );

  const handleClickOpen = (e: any) => {
    e.preventDefault();
    if (totalAmount > 200000) {
      setOpen(true);
    } else {
      handleApproveDiscount();
    }
  };

  const handleApproveDiscount = () => {
    dispatch(setInvoices({ invoices: selectedInvoices }));
    setOpen(false);
    router.push("/fatura-onay");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#868e9620",
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box>
        <Typography component="p" variant="subtitle1" color="#000">
          Fatura Sayısı:{" "}
          <Typography
            component="span"
            fontWeight="600"
            variant="subtitle1"
            color="primary.main"
          >
            {selectedInvoices.length}
          </Typography>{" "}
        </Typography>
        <Typography component="p" variant="subtitle1" color="#000">
          Toplam Tutar:{" "}
          <Typography
            component="span"
            fontWeight="600"
            variant="subtitle1"
            color="primary.main"
          >
            {totalAmount.toLocaleString("tr-TR")}
          </Typography>{" "}
          ₺
        </Typography>
      </Box>
      <Box>
        <Button
          color="success"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          disabled={selectedInvoices.length === 0}
          onClick={handleClickOpen}
        >
          İskonto Talebi Oluştur
        </Button>
      </Box>
      <AlertModal
        open={open}
        handleClose={handleClose}
        handleApproveDiscount={handleApproveDiscount}
      />
    </Box>
  );
};

export default memo(TableFooter);
