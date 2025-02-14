import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api"; // Ensure this matches your API import path
import { useState, useEffect } from "react";

// Define the expected shape of a decoded JWT token
interface DecodedToken {
  exp: number;
}

// Define the Props for the ProtectedRoute
interface ProtectedRouteProps {
  children: JSX.Element;
}

const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    authenticateUser().catch(() => setIsAuthorized(false));
  }, []);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshToken) {
      setIsAuthorized(false);
      return;
    }

    try {
      const response = await api.post("/api/token/refresh/", { refresh: refreshToken });
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setIsAuthorized(false);
    }
  };

  const authenticateUser = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded: DecodedToken = jwtDecode(token);
      const tokenExpiration = decoded.exp;
      const now = Date.now() / 1000;

      if (tokenExpiration < now) {
        await refreshAccessToken();
      } else {
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>; // You can replace this with a spinner
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
