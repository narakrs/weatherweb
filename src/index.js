import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import App from './container/App/App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from './components/globalLoading/index';
import GlobalModal from './components/globalMoDal/index';
ReactDOM.render(
  <Provider store={store()}>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <GlobalModal />
      <GlobalLoading />
      <App />
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
