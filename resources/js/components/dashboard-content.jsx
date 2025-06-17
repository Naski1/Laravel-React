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
    <div className="flex flex-1 flex-col bg-gray-200 p-6 space-y-6">
      {/* Title & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-sm text-gray-500">Manage and track your projects</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Project Dashboard</h1>
        </div>

        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Task, Meeting, Projects..."
            className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* My Tasks */}
        {/* <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm p-6"> */}
          <MyTasks />
        {/* </div> */}

        {/* Middle Column (Charts + Invoice) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartPieDonut title="Projects Overview" inProgress={14} completed={32} />
            <ChartAreaInteractive title="Income VS Expense" />
          </div>

          {/* Invoice */}
          <InvoiceOverview />
        </div>

        {/* My Meetings & Tickets */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <MeetingsTicketsDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

