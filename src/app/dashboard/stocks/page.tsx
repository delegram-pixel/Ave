import { DashboardLayout } from "../components/dashboard-layout";
import { StockBrowsePage } from "../../dashboard/components/stock-browse-page"

export default function Stocks() {
  return (
    <DashboardLayout>
      <StockBrowsePage />
    </DashboardLayout>
  );
}
