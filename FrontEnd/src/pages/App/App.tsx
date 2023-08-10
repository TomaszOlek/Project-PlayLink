// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { useEffect } from "react";
import AppLayout from "../../view/Layout/AppLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function App() {
  // const isMenuOpen = useSelector((state: RootState) => state.menuState.value);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to /app/chat when the App component is rendered and the current location is /app
    if (location.pathname === "/app") {
      navigate("/app/chat");
    }
  }, [location, navigate]);

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
