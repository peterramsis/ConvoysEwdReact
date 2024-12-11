import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../core/axiosClient";
import { useStateContext } from "../core/ContextProvider";
import AppHeader from './layouts/AppHeader';

const Layout = () => {
  const { token, user, setUser } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token && !user) {
      axiosClient
        .get("/auth/me")
        .then(({ data }) => {
          setUser(data.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token, user, setUser]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>; // Replace with a spinner or loader if needed
  }

  return (
    <div lang="ar" dir="rtl">
      <AppHeader/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
