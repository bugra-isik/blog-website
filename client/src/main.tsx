import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.tsx"
import About from "./components/about/index.tsx"
import Post from "./components/post/index.tsx"
import Tags from "./components/tags/index.tsx"

const theme = createTheme({
  typography: {
    fontFamily: "'Open Sans', sans-serif",
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tags",
    element: <Tags />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post",
    element: <Post />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
