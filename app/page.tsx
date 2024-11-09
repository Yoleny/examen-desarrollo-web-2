
import { AuthProvider } from './context/AuthContext';
import { ExpenseProvider } from './context/ExpenseContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <Component {...pageProps} />
      </ExpenseProvider>
    </AuthProvider>
  );
}
export default MyApp;