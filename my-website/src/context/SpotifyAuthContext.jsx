import { createContext, useState, useEffect } from "react";

const SpotifyAuthContext = createContext();

const CLIENT_ID = "f69e66a4dc2f44988561542a49564d74";
const REDIRECT_URI = "http://localhost:5173/callback"; // Update for production
const SCOPES = "user-library-read user-read-private"; // Required for fetching top podcasts
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export const SpotifyAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("spotify_access_token") || null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // Check for token in URL hash after Spotify redirect
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // Remove the # character
      const token = params.get("access_token");
      
      if (token) {
        localStorage.setItem("spotify_access_token", token);
        setAccessToken(token);
        // Clean the URL
        window.history.replaceState({}, null, window.location.pathname);
      }
    }
  }, []);

  useEffect(() => {
    if (!accessToken && !isAuthenticating) {
      setIsAuthenticating(true);
      redirectToSpotify();
    }
  }, [accessToken, isAuthenticating]);

  const redirectToSpotify = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
    window.location.href = authUrl;
  };

  return (
    <SpotifyAuthContext.Provider value={{ accessToken }}>
      {children}
    </SpotifyAuthContext.Provider>
  );
};

export default SpotifyAuthContext;
