import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

import { UnderDevelopment } from "./pages/UnderDevelopment";
import { App } from "./pages/App";
import UserProfile from "./pages/UserProfile";
import { Chat } from "./pages/Chat";

import "./i18n";

const fetchRandomUsers = async () => {
  const response = await axios.get("https://randomuser.me/api/?results=5");
  return response.data.results;
};

const Main = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomUsers().then((results) => {
      const updatedUsers = results.map((user, index) => ({
        ...user,
        login: { username: `user_${index}` },
      }));
      setUsers(updatedUsers);
      setIsLoading(false);
    });
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyles />
            {!isLoading && (
              <Routes>
                <Route path="/" element={<UnderDevelopment />} />
                <Route path="/app" element={<App />}>
                  <Route path="chat" element={<Chat />} />
                </Route>

                {users.map((user) => {
                  console.log(user.login.username);
                  return (
                    <Route
                      key={user.login.username}
                      path={`/user/:username`} // Use : before "username" to indicate it's a dynamic segment
                      element={<UserProfile user={user} />}
                    />
                  );
                })}
              </Routes>
            )}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
