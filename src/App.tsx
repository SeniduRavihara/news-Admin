import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import NewPostPage from "./pages/NewPostPage";
import AdvertisingPage from "./pages/AdvertisingPage";
import ContentPage from "./pages/ContentPage";
import CommentsPage from "./pages/CommentsPage";
import AccountsPage from "./pages/AccountsPage";
import NotFound from "./pages/NotFound";
import AnalyticsPage from "./pages/AnalyticsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<NewPostPage />} />
      <Route path="advertising-page" element={<AdvertisingPage />} />
      <Route path="content-page" element={<ContentPage />} />
      <Route path="comments-page" element={<CommentsPage />} />
      <Route path="analytics-page" element={<AnalyticsPage />} />
      <Route path="accounts-page" element={<AccountsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App