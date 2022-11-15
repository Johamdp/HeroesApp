import { Routes, Route, Navigate } from "react-router-dom";
import { CheckingAuth } from "../auth/components/CheckingAuth";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { logged } = useCheckAuth();

  if (logged === "checking") return <CheckingAuth/>;

  return (
    <>
      <Routes>
        {logged === "authenticated" ? (
          <>
            <Route path="/*" element={<HeroesRoutes/>}></Route>
          </>
        ) : (
          <>
            <Route path="login" element={<LoginPage/>}></Route>

            <Route
              path="register"
              element={<RegisterPage/>}
            ></Route>
          </>
        )}
        { logged === 'not-authenticated' && <Route path="/*" element={<Navigate to="/login"></Navigate>} />}
      </Routes>
    </>
  );
}