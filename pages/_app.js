import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { ToastContainer } from 'react-toastify';

import store from '@/src/app/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </Provider>
    </>
  );
}
