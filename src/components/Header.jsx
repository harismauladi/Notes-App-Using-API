import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "../elements/ToggleTheme";
import ThemeContex from "../hooks/ThemeContex";

function Header({ logout, name, toggleLang, local }) {
  const { toggleTheme } = React.useContext(ThemeContex);

  return (
    <header>
      <h1>
        <Link to={"/"} className="linkHead">
          NotesApp
        </Link>
      </h1>
      <div className="navigation">
        <ul>
          <li style={{ position: "relative", top: 6 }}>
            <button style={{ cursor: "pointer" }} onClick={toggleLang}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93 2H5.02C3 2 2 3 2 5.02V8.94C2 11 3 12 5.02 11.95H8.94C11 12 12 11 11.95 8.93V5.02C12 3 11 2 8.93 2ZM9.01 9.76C8.33 9.76 7.67 9.5 7.12 9.04C6.5 9.49 5.75 9.76 4.94 9.76C4.53 9.76 4.19 9.42 4.19 9.01C4.19 8.6 4.53 8.26 4.94 8.26C5.96 8.26 6.81 7.56 7.12 6.6H4.94C4.53 6.6 4.19 6.26 4.19 5.85C4.19 5.44 4.53 5.1 4.94 5.1H6.23C6.27 4.72 6.58 4.42 6.97 4.42C7.36 4.42 7.67 4.72 7.71 5.1H7.97C7.98 5.1 7.99 5.1 7.99 5.1H8.01H9C9.41 5.1 9.75 5.44 9.75 5.85C9.75 6.26 9.42 6.6 9 6.6H8.67C8.58 7.08 8.39 7.53 8.14 7.94C8.41 8.14 8.7 8.26 9.01 8.26C9.42 8.26 9.76 8.6 9.76 9.01C9.76 9.42 9.42 9.76 9.01 9.76Z"
                  fill="#292D32"
                />
                <path
                  d="M9 22.75C4.73 22.75 1.25 19.27 1.25 15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15C2.75 17.96 4.81 20.44 7.58 21.09L7.31 20.64C7.1 20.28 7.21 19.82 7.57 19.61C7.92 19.4 8.39 19.51 8.6 19.87L9.65 21.62C9.79 21.85 9.79 22.14 9.66 22.37C9.52 22.6 9.27 22.75 9 22.75Z"
                  fill="#292D32"
                />
                <path
                  d="M21.9985 9.75C21.5885 9.75 21.2485 9.41 21.2485 9C21.2485 6.04 19.1885 3.56 16.4185 2.91L16.6885 3.36C16.8985 3.72 16.7885 4.18 16.4285 4.39C16.0785 4.6 15.6085 4.49 15.3985 4.13L14.3485 2.38C14.2085 2.15 14.2085 1.86 14.3385 1.63C14.4785 1.4 14.7285 1.25 14.9985 1.25C19.2685 1.25 22.7485 4.73 22.7485 9C22.7485 9.41 22.4085 9.75 21.9985 9.75Z"
                  fill="#292D32"
                />
                <path
                  d="M16.9198 11.8516C14.1198 11.8516 11.8398 14.1216 11.8398 16.9316C11.8398 19.7316 14.1098 22.0116 16.9198 22.0116C19.7198 22.0116 21.9998 19.7416 21.9998 16.9316C21.9998 14.1216 19.7298 11.8516 16.9198 11.8516ZM19.3998 19.3416C19.0298 19.5216 18.5798 19.3816 18.3898 19.0016L18.2198 18.6616H15.6298L15.4598 19.0016C15.3298 19.2616 15.0598 19.4116 14.7898 19.4116C14.6798 19.4116 14.5598 19.3816 14.4598 19.3316C14.0898 19.1416 13.9398 18.6916 14.1198 18.3216L16.2598 14.0516C16.3898 13.8016 16.6498 13.6416 16.9298 13.6416C17.2098 13.6416 17.4698 13.8016 17.5998 14.0616L19.7398 18.3316C19.9198 18.7016 19.7698 19.1516 19.3998 19.3416Z"
                  fill="#292D32"
                />
                <path
                  d="M16.3789 17.1603H17.4689L16.9189 16.0703L16.3789 17.1603Z"
                  fill="#292D32"
                />
              </svg>
            </button>
          </li>
          <li style={{ position: "relative", bottom: 8 }}>
            <ToggleTheme onClick={toggleTheme} />
          </li>
          <li>
            <Link to={"/"} className="link">
              {local === "en" ? "Active Notes" : "Catatan Aktif"}
            </Link>
          </li>
          <li>
            <Link to={"/archives"} className="link">
              {local === "en" ? "Archived Notes" : "Catatan Terarsip"}
            </Link>
          </li>
          <li>
            {name}
            <button
              className="link"
              onClick={logout}
              style={{
                marginLeft: 5,
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" />
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
