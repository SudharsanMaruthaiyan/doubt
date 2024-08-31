// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import QuizRouter from './Components/QuizRouter/QuizRouter.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuizDetails from './Components/QuizRouter/QuizDetails/QuizDetails.jsx'

const AppLayout =()=> {
    return (
      <>
        <QuizRouter/>
      </>
    )
} 

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>
  },
  {
    path:"/quizdetail",
    element:<QuizDetails/>
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)


