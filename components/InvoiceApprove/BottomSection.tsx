import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import ApproveModal from "./ApproveModal";
import { useRouter } from "next/router";

const BottomSection = () => {
  const { selectedInvoices } = useSelector((state: any) => state);
  const { invoices } = selectedInvoices;
  const [open, setOpen] = useState(false);
  const router = useRouter();

  //onaylandı senaryosu
  const [approve, setisApprove] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalAmount = invoices.reduce(
    (acc: any, invoice: any) => acc + invoice.PayableAmount,
    0
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = () => {
    setLoading(true);
    setTimeout(() => {
      setisApprove(true);
      setLoading(false);
    }, 2000);
    if (approve) {
      setTimeout(() => {
        setOpen(false);
        router.push("/");
      }, 2000);
    }
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h6" noWrap component="p" fontWeight={600}>
        Faturaların Toplamı:{" "}
        <Typography variant="h6" noWrap component="span" fontWeight={600}>
          {totalAmount.toLocaleString("tr-TR")} ₺
        </Typography>
      </Typography>
      <Button
        color="success"
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        onClick={() => setOpen(true)}
      >
        İskonto Talebi Oluştur
      </Button>
      <ApproveModal
        open={open}
        totalAmount={totalAmount}
        handleClose={handleClose}
        approve={approve}
        loading={loading}
        handleApprove={handleApprove}
      />
    </Box>
  );
};

export default BottomSection;
