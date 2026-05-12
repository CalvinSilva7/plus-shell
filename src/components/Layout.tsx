import type { ReactNode } from "react";
import { Container, Box, Toolbar } from "@mui/material";
import { AppBar } from "./AppBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Box component="main" sx={{ flexGrow: 1, width: "100%" }}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
