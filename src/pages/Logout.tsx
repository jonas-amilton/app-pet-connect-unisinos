import React, { useEffect } from "react";

const Logout: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem("userEmail");
    localStorage.setItem("userEmail", "");

    window.location.href = "/login";
  }, []);

  return null;
};

export default Logout;
