import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("../App"));
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <App />
                    </Suspense>
                ),
            }
        ]
    }
]);

export default router;
