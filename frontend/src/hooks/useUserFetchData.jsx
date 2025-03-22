import { useEffect, useState } from "react";

const useUserFetchData = (url, requireAuth = true) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const headers = {};
        if (requireAuth && !token) {
          throw new Error("Token is missing! Please log in again.");
        }

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          if (res.status === 401 && requireAuth) {
            localStorage.removeItem("token"); // Clear the invalid token
            window.location.href = "/login"; // Redirect to login page
          }
          throw new Error(result.message + "🤢");
        }
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useUserFetchData;
