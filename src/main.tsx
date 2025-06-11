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

const InternshipPage = lazy(
  () => import("./pages/InternshipPage.tsx").then(
    // module => ({default: module.InternshipPage})
  )
);

const SimpleSpinner = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    style={{backgroundColor: 'var(--base-color)', color: 'var(--text-color)'}}
  >
    <p className="text-2xl font-bold">Loading...</p>
  </div>
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
      // element: <InternshipPage />
      element: (
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner/>}><InternshipPage/></Suspense>
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