import Head from "next/head";
import { ReactNode } from "react";
import MiniDrawer from "./MenuDrawer";
import Box from "@mui/material/Box";

type LayoutTypes = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: LayoutTypes) => (
  <>
    <Head>
      <title>Figopara Dashboard</title>
    </Head>
    <>
      <Box
        sx={{
          height: 44,
        }}
      />
      <MiniDrawer component={children} pageTitle={pageTitle} />
    </>
  </>
);

export default Layout;
