import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
// import { InternshipPage } from "./pages/InternshipPage.tsx";
import i18n from "./i18n.ts";
import {I18nextProvider} from "react-i18next";
import {ErrorPage} from "./pages/ErrorPage.tsx";

import {lazy, Suspense} from "react";
import {ErrorBoundary} from "./components/ErrorBoundary.tsx";
import {FancySpinner} from "./components/FancySpinner.tsx";

const InternshipPage = lazy(
  () => import("./pages/InternshipPage.tsx").then(
    module => ({default: module.InternshipPage})
  )
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/internship-blog',
      element: (
        <ErrorBoundary>
          <Suspense fallback={<FancySpinner/>}><InternshipPage/></Suspense>
        </ErrorBoundary>
      )
    },
  ],
  {
    basename: '/portfolio',
  }
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router}/>
    </I18nextProvider>
  </StrictMode>,
)