import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>{`\n        body {\n          background: url('/ocean-background.jpg') no-repeat center center fixed;\n          background-size: cover;\n        }\n      `}</style>
    </Provider>
  );
}

export default MyApp;
