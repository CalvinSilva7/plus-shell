import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { AuthProvider } from "mfe_auth/AuthProvider";
import { AuthGuard } from "mfe_auth/AuthGuard";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";

const LoginPage = lazy(() => import("mfe_auth/LoginPage"));
const RegisterPage = lazy(() => import("mfe_auth/RegisterPage"));
const ProfilePage = lazy(() => import("mfe_auth/ProfilePage"));
const AdminPanel = lazy(() => import("mfe_auth/AdminPanel"));

function Loading() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <CircularProgress />
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/"
              element={
                <AuthGuard>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </AuthGuard>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </AuthGuard>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthGuard>
                  <Layout>
                    <ProfilePage />
                  </Layout>
                </AuthGuard>
              }
            />
            <Route
              path="/admin"
              element={
                <AuthGuard allowedRoles={["admin"]}>
                  <Layout>
                    <AdminPanel />
                  </Layout>
                </AuthGuard>
              }
            />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}
