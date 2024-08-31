import { BrowserRouter, Route, Routes } from "react-router-dom";

interface Route {
  path: string;
  element: React.ReactNode;
}

const routes: Route[] = [];

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
