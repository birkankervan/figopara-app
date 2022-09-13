export interface InvoicesTypes {
  Invoices: Invoice[];
  Page: number;
  PageSize: number;
  SortType: string;
  Sort: string;
  TotalCount: number;
  IsExport: boolean;
}

export interface Invoice {
  Id: number;
  SenderCompanyId: number;
  ReceiverCompanyId: number;
  InvoiceNumber: string;
  SenderIdentifier: string;
  SenderName: string;
  ReceiverIdentifier: string;
  ReceiverName: string;
  InsertedDate: Date;
  ProfileId: string;
  InvoiceTypeCode: string;
  PayableAmount: number;
  PayableAmountCurrency: string;
  IssueDate: Date;
  UserId: number;
  HashCode: string;
  Type: number;
  Status: number;
  RemainingAmount: number;
  ApprovedPayableAmount: number;
  DocumentExist: number;
  EInvoiceType: number;
  IsGibApproved?: boolean;
  GibApproveDate?: Date;
  CurrencyId: number;
  UuId?: string;
  TaxFreeAmount?: number;
}
