import Home from '../components/pages/Home';
import Kids from '../components/pages/Kids';
import Men from '../components/pages/Men';
import Women from '../components/pages/Women';

export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/men',
    element: <Men />,
  },
  {
    path: '/women',
    element: <Women />,
  },
  {
    path: '/kids',
    element: <Kids />,
  },
];
