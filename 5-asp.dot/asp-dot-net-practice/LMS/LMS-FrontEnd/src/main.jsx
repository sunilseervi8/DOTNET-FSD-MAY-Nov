import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import toast, { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <BrowserRouter>
     <App/>
     <Toaster/>
  </BrowserRouter>
 </Provider>
)
