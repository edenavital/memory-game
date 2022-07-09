import { Navigate, Outlet } from "react-router";
import { LoadSpinner } from "../../components/LoadSpinner";
import { NavigateBack } from "../../components/NavigateBack";
import { FRONTEND_ROUTES } from "../../consts";
import { useAppSelector } from "../../redux/hooks";

const useAuth = () => {
  const user = useAppSelector((state) => state.global.nickname);
  return user.length > 0;
};

const useLoading = () => {
  const isLoading = useAppSelector((state) => state.global.loading);
  return isLoading;
};

export const ProtectedRoutes = () => {
  const isLoading = useLoading();
  const isAuth = useAuth();
  return isAuth ? (
    renderPage(isLoading)
  ) : (
    <Navigate to={FRONTEND_ROUTES.ROOT} />
  );
};

const renderPage = (isLoading: boolean) => {
  return (
    <>
      {isLoading && <LoadSpinner />}
      <NavigateBack />
      <Outlet />
    </>
  );
};
