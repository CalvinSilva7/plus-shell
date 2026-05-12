import { Container, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";

export function AccessDenied() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <BlockIcon sx={{ fontSize: 64, color: "error.main", mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Acesso Negado
      </Typography>
      <Typography color="text.secondary">
        Você não tem permissão para acessar esta página.
      </Typography>
    </Container>
  );
}
