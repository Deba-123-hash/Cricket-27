import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ToastProvider } from './context/ToastContext';
import { UIProvider } from './context/UIContext';

function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <ToastProvider>
          <AppRoutes />
        </ToastProvider>
      </UIProvider>
    </BrowserRouter>
  );
}

export default App;
