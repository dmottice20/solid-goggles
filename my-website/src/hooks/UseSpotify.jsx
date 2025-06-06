import { useContext, useEffect, useState } from "react";
import SpotifyAuthContext from "../context/SpotifyAuthContext";

const UseSpotify = () => {
  const { accessToken } = useContext(SpotifyAuthContext);
  const [topPodcasts, setTopPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = accessToken || localStorage.getItem("spotify_access_token");
    if (!token) {
      console.log("No token available");
      setLoading(false);
      return;
    }

    const fetchSavedPodcasts = async () => {
      try {
        console.log("Fetching with token:", token); // Debug log
        const response = await fetch("https://api.spotify.com/v1/me/shows?offset=0&limit=20", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          console.log("Response status:", response.status); // Debug log
          throw new Error("Failed to fetch saved podcasts");
        }

        const data = await response.json();
        console.log("Saved Podcasts API Response:", data);
        setTopPodcasts(data.items.map((item) => item.show) || []);
      } catch (error) {
        console.error("Error fetching saved podcasts:", error);
        setTopPodcasts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedPodcasts();
  }, [accessToken]);

  return { topPodcasts, loading };
};

export default UseSpotify;
