import React, { useEffect, useMemo, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ActiveNotes from "./pages/ActiveNotes";
import ArchivedNotes from "./pages/ArchivedNotes";
import AddNotes from "./pages/AddNotes";
import DetailPageContainer from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import Header from "./components/Header";
import ThemeContex from "./hooks/ThemeContex";

function App() {
  const [auth, setAuthed] = useState(null);
  const [loading, isLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [local, setLocal] = useState("en");

  useEffect(() => {
    const getUserLog = async () => {
      const { eror, data } = await getUserLogged();

      if (!eror) {
        isLoading(false);
        setAuthed(data);
      }
    };
    getUserLog();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", local);
  }, [local]);

  const onLoginSucsess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = getUserLogged();

    return setAuthed(data);
  };

  const onLogout = () => {
    putAccessToken("");
    return setAuthed(null);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);

    setTheme(newTheme);
  };

  const toggleLocal = () => {
    setLocal((prevState) => {
      return prevState === "en" ? "id" : "en";
    });
  };

  const localThemeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  if (loading) {
    return null;
  }

  if (auth === null) {
    const onAuthEror = createBrowserRouter([
      {
        path: "/*",
        element: <Login onLogin={onLoginSucsess} />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]);

    return <RouterProvider router={onAuthEror} />;
  }

  return (
    <BrowserRouter>
      <ThemeContex.Provider value={localThemeContextValue}>
        <div className="app-container">
          <Header
            logout={onLogout}
            name={auth?.name}
            toggleLang={toggleLocal}
            local={local}
          />
          <Routes>
            <Route path="/" element={<ActiveNotes local={local} />} />
            <Route path="/archives" element={<ArchivedNotes local={local} />} />
            <Route path="/notes/new" element={<AddNotes />} />
            <Route path="/notes/:id" element={<DetailPageContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeContex.Provider>
    </BrowserRouter>
  );
}

export default App;
