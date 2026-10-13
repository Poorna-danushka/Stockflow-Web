import {Login, StockRequests, StockSummary, DistributionRun, ReturnApprovals } from "@/pages";


export const routes = [
    {
        route: "/login",
        page: <Login />
    },
    {
        route: "/stock-summary",
        page: <StockSummary />
    },
    {
        route: "/stock-request",
        page: <StockRequests />
    },
    {
        route: "/distribution-run",
        page: <DistributionRun />
    },
    {
        route: "/return-approval",
        page: <ReturnApprovals />
    },

]