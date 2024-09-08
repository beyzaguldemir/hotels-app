import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// QueryClient classından örnek al
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provide ile app bileşenini kapsa */}
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Devtools ekranı sağ altına gelir */}
      <ReactQueryDevtools initialIsOpen={false} />
      {/* Bildirim Bileşeni */}
      <ToastContainer/>
    </QueryClientProvider>
  </React.StrictMode>,
)
