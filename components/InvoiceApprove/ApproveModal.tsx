import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { memo } from "react";
import Loading from "components/Loading";
import { Box } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type ApproveModalProps = {
  open: boolean;
  handleClose: () => void;
  totalAmount: number;
  loading: boolean;
  approve: boolean;
  handleApprove: () => void;
};

const ApproveModal = ({
  open,
  handleClose,
  totalAmount,
  handleApprove,
  loading,
  approve,
}: ApproveModalProps) => {
  const textObj = approve ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckCircleOutlineIcon color="success" fontSize="large" />
      İskonto Talebiniz Onaylandı. Tamam&apos;a tıkladıktan 1 saniye sonra ana
      sayfaya yönlendirileceksiniz.{" "}
    </Box>
  ) : loading ? (
    <Loading />
  ) : (
    <div>
      {totalAmount.toLocaleString("tr-TR")} TL Tutarında iskonto talebi
      oluşuturulacktır. Onalaylıyor musunuz?
    </div>
  );

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          İSKONTO TALEBİ OLUŞTURULUYOR
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {textObj}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!approve && <Button onClick={handleClose}>İptal</Button>}
          <Button onClick={handleApprove} autoFocus>
            Tamam
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(ApproveModal);
