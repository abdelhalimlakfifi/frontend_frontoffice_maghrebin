import Home from '../components/views/Home';
import Kids from '../components/views/Kids';
import Men from '../components/views/Men';
import Women from '../components/views/Women';

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
