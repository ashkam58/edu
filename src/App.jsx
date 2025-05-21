import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { ProgressProvider } from './contexts/ProgressContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider> {/* Wrap with ProgressProvider */}
        <RouterProvider router={router} />
      </ProgressProvider>
    </ThemeProvider>
  );
}
export default App;

