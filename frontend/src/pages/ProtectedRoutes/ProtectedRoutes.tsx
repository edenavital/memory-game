import { Navigate, Outlet } from "react-router";
import { NavigateBack } from "../../components/NavigateBack";
import { FRONTEND_ROUTES } from "../../consts";
import { useAppSelector } from "../../redux/hooks";

const useAuth = () => {
  const user = useAppSelector((state) => state.global.nickname);
  return user.length > 0;
};

export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? renderPage() : <Navigate to={FRONTEND_ROUTES.ROOT} />;
};

const renderPage = () => {
  return (
    <>
      <NavigateBack />
      <Outlet />
    </>
  );
};
