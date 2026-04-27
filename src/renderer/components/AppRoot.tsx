import { useEffect } from "react";
import App from "./App";
import { AppProvider } from "../contexts/AppContext";
import { useDirection } from "../hooks/useDirection";

export default function AppRoot() {
  const dir = useDirection();

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
