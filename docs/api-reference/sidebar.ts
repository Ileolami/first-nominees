import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/first-pension-rest-apis",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api-reference/get-rsapin-holders",
          label: "Get RSAPIN Holders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-rsapin-holders-paginated",
          label: "Get RSAPIN Holders (Paginated)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-customer-by-phonenumber",
          label: "Get Customer By Phonenumber",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-customer-by-rsapin",
          label: "Get Customer By RSAPIN",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/insert-micro-pension-payment",
          label: "Add Micro Pension Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/insert-micro-pension-payment-collection-agent",
          label: "Add Micro Pension Payment Collection Agent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/register-new-rsapin",
          label: "Register New RSAPIN",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/register-new-rsapin-cps",
          label: "Register New RSAPIN CPS",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-asset-based-fees-schedule",
          label: "Upload Asset Based Fees Schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-benefit-payment-schedule",
          label: "Upload Benefit Payment Schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-fund-transfer-schedule",
          label: "Upload Fund Transfer Schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-pencom-portion-schedule",
          label: "Upload PENCOM Portion Schedule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-all-collection-pension-payment",
          label: "Upload All Collection Pension Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/bank-sm-call",
          label: "Bank SM Call",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/erc-call",
          label: "ERC Call",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/generate-cts",
          label: "Generate CTS",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/generate-pnod",
          label: "Generate PNOD",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/autolas-call",
          label: "AUTOLas Call",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/merged-tran-call",
          label: "Merged Tran Call",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
