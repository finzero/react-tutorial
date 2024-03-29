import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import UseState from './pages/UseState';
import UseEffect from './pages/UseEffect';
import UseRef from './pages/UseRef';
import UseContext from './pages/UseContext';
import UseReducer from './pages/UseReducer';
import IniPageBaru from './pages/IniPageBaru';
import CustomHook from './pages/CustomHook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/useState',
        element: <UseState />,
      },
      {
        path: '/useEffect',
        element: <UseEffect />,
      },
      {
        path: '/useRef',
        element: <UseRef />,
      },
      {
        path: '/useContext',
        element: <UseContext />,
      },
      {
        path: '/useReducer',
        element: <UseReducer />,
      },
      {
        path: '/page-baru',
        element: <IniPageBaru />,
      },
      {
        path: '/custom-hook',
        element: <CustomHook />,
      },
    ],
  },
]);
export default router;
