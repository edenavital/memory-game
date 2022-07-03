import { Navigate, Outlet } from "react-router";
import { NavigateBack } from "../../components/NavigateBack";
import { Wrapper } from "../../components/Wrapper";
import { ROUTES } from "../../consts";
import { useAppSelector } from "../../redux/hooks";

const useAuth = () => {
  const user = useAppSelector((state) => state.global.nickname);
  return user.length > 0;
};

export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? renderPage() : <Navigate to={ROUTES.ROOT} />;
};

const renderPage = () => {
  return (
    <>
      <NavigateBack />
      <Outlet />
    </>
  );
};
