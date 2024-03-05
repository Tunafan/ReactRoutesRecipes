import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Logout() {
  const auth = useAuth();
  auth.signOut();
  return <Navigate to="/" replace={true} />;
}
