import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { memo } from "react";

type AlertModalProps = {
  open: boolean;
  handleClose: () => void;
  handleApproveDiscount: () => void;
};

const AlertModal = ({
  open,
  handleClose,
  handleApproveDiscount,
}: AlertModalProps) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Fatura Tutarı 200.000 TL&apos;den büyük
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            İskonto Talebinde bulunduğunuz faturaların toplam tutarı 200.000
            TL&apos;den büyüktür
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={handleApproveDiscount} autoFocus>
            Tamam
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(AlertModal);
