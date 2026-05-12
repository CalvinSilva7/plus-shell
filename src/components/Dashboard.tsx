import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useAuth } from "mfe_auth/AuthProvider";

const roleColors: Record<string, "secondary" | "info" | "success"> = {
  admin: "secondary",
  gestor: "info",
  vendedor: "success",
};

export function Dashboard() {
  const { user } = useAuth();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        <HomeIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Dashboard
      </Typography>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Bem-vindo, {user?.email}!
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Você está logado como{" "}
            <Chip
              label={user?.role}
              color={roleColors[user?.role ?? "vendedor"]}
              size="small"
            />
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Sistema de gestão de estoque para loja de roupas plus size.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
