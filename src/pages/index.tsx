import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { EditUserPage } from './EditUserPage/EditUserPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/:id',
        element: <EditUserPage />,
      },
    ],
  },
]);
