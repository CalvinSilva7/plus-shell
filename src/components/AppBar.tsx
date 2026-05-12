import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
} from "@mui/material";
import { useAuth } from "mfe_auth/AuthProvider";

export function AppBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = async () => {
    setAnchorEl(null);
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", mr: 4 }}
          onClick={() => navigate("/")}
        >
          Plus
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/profile")}>
            Perfil
          </Button>
          {user?.role === "admin" && (
            <Button color="inherit" onClick={() => navigate("/admin")}>
              Painel Admin
            </Button>
          )}
        </Box>
        <Box>
          <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "secondary.main" }}>
              {user?.email?.[0]?.toUpperCase() ?? "?"}
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem disabled>
              <Typography variant="body2">{user?.email}</Typography>
            </MenuItem>
            <MenuItem onClick={() => { setAnchorEl(null); navigate("/profile"); }}>
              Perfil
            </MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
