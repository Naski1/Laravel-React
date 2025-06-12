// DashboardContent.tsx
import MyTasks from "@/components/my-tasks";
import ChartPieDonut from "@/components/chart-radial-stacked";
import InvoiceOverview from "@/components/invoice-overview";
import MeetingsTicketsDashboard from "@/components/my-metting";
import { ChartAreaInteractive } from "@/components/chart-area-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header section with title and search */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Manage and track your project</p>
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
        </div>

        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow p-4">
            <MyTasks />
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChartPieDonut title="Project Overview" inProgress={44} completed={32} />
            <ChartAreaInteractive title="Sales Trends" />
          </div>
          <div>
            <InvoiceOverview />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow p-4">
            <MeetingsTicketsDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
