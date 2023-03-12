import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/root';
import { Provider } from 'react-redux'
import { store } from './Store'
import ContextProvider from './Common/ContextApi';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  // {/* </React.StrictMode>, */}
)
