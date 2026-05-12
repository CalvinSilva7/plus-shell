declare module "mfe_auth/AuthProvider" {
  import type { ReactNode } from "react";
  export function AuthProvider(props: { children: ReactNode }): JSX.Element;
  export function useAuth(): {
    user: { userId: string; email: string; role: "admin" | "gestor" | "vendedor" } | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  };
}

declare module "mfe_auth/LoginPage" {
  const LoginPage: React.ComponentType;
  export default LoginPage;
}

declare module "mfe_auth/RegisterPage" {
  const RegisterPage: React.ComponentType;
  export default RegisterPage;
}

declare module "mfe_auth/ProfilePage" {
  const ProfilePage: React.ComponentType;
  export default ProfilePage;
}

declare module "mfe_auth/AdminPanel" {
  const AdminPanel: React.ComponentType;
  export default AdminPanel;
}

declare module "mfe_auth/AuthGuard" {
  import type { ReactNode } from "react";
  export function AuthGuard(props: {
    children: ReactNode;
    allowedRoles?: Array<"admin" | "gestor" | "vendedor">;
  }): JSX.Element;
}
