import { useState } from "react";
import {
  DataGrid,
  GridColDef,
  trTR,
  GridSelectionModel,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { format } from "date-fns";
import Loading from "components/Loading";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import TableFooter from "./TableFooter";
import { InvoicesTypes } from "data/invoicesTypes";
import Button from "@mui/material/Button";
import InvoiceDetail from "./InvoiceDetail";

type TableProps = {
  invoices?: InvoicesTypes;
  isLoading: boolean;
};

const TableSection = ({ invoices, isLoading }: TableProps) => {
  const { Invoices } = invoices || {};
  const [open, setOpen] = useState(false);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<any>();
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [selectedInvoices, setSelectedInvoices] = useState<any>([]);

  const handleInvoiceDetail = (e: any, id: any) => {
    e.preventDefault();
    setSelectedInvoiceId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!!invoices === false) {
    return <Loading />;
  }

  const columns: GridColDef[] = [
    { field: "InvoiceNumber", headerName: "Fatura No", width: 150 },
    {
      field: "SenderName",
      headerName: "Gönderici Adı",
      width: 120,
    },
    {
      field: "ReceiverName",
      headerName: "Alıcı Adı",
      width: 120,
    },
    {
      field: "PayableAmount",
      headerName: "Ödenebilen Tutar",
      type: "number",
      width: 165,
    },
    {
      field: "RemainingAmount",
      headerName: "Kalan Tutar",
      type: "number",
      width: 145,
    },
    {
      field: "ApprovedPayableAmount",
      headerName: "Onaylanan Ödenebilir Tutar",
      type: "number",
      width: 220,
    },
    {
      field: "InsertedDate",
      headerName: "Fatura Giriş Tarihi",
      type: "date",
      width: 180,
      valueGetter: (params: GridValueGetterParams) => `${format(
        new Date(params.value as string),
        "dd/MM/yyyy HH:mm"
      )}
      `,
    },
    {
      field: "id",
      headerName: "Detay",
      type: "number",
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => (
        <Button size="small" onClick={(e) => handleInvoiceDetail(e, params.id)}>
          <InfoIcon />
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={Invoices || []}
        columns={columns}
        checkboxSelection
        loading={isLoading}
        pageSize={100}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        disableColumnMenu
        onSelectionModelChange={(newSelectionModel) => {
          if (newSelectionModel.length <= 3) {
            const last = newSelectionModel.map((item: any) =>
              Invoices?.find((invoice: any) => invoice.id === item)
            );
            setSelectedInvoices(last);
            setSelectionModel(newSelectionModel);
          } else {
            alert("3 adetden fazla fatura seçemezsiniz.");
          }
        }}
        selectionModel={selectionModel}
        components={{
          Footer: TableFooter,
        }}
        componentsProps={{
          footer: { selectedInvoices },
        }}
        disableSelectionOnClick
      />
      <InvoiceDetail
        invoiceId={selectedInvoiceId}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default TableSection;
