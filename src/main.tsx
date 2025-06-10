import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { InternshipPage } from "./pages/InternshipPage.tsx";
import i18n from "./i18n.ts";
import {I18nextProvider} from "react-i18next";
import {ErrorPage} from "./pages/ErrorPage.tsx";

const router = createBrowserRouter(
    [
        {
          path: '/',
          element: <App />,
          errorElement: <ErrorPage />
        },
        {
          path: '/internship-blog',
          element: <InternshipPage />
        },
    ],
    {
        basename: '/portfolio',
    }
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>,
)