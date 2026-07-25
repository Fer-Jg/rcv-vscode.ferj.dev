import { useEffect } from "react";

const DISCORD_INVITE = "https://discord.gg/KD4JcjgZtb";

export default function Discord() {
  useEffect(() => {
    window.location.replace(DISCORD_INVITE);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <p>Redirecting to Discord...</p>
    </div>
  );
}