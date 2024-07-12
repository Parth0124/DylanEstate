import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Listing from './components/Listing.jsx';
import Thankyou from './components/Thankyou.jsx';
import PreviewPage from './components/PreviewPage.jsx';
import PropertyOverview from './components/PropertyOverview.jsx';

const router = createBrowserRouter([
  {
    path: '/dylanEstate/',
    element: <App />,
    children: [
      {
        path: '/dylanEstate/',
        element: <Dashboard />
      },
      {
        path: '/dylanEstate/list',
        element: <Listing />
      },
      {
        path: '/dylanEstate/thankyou',
        element: <Thankyou />
      },
      {
        path: '/dylanEstate/preview',
        element: <PreviewPage />
      },
      {
        path: '/dylanEstate/a',
        element: <PropertyOverview />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
)
