import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const InvoiceOverview = () => {
    // Data for each progress bar
    const invoiceStatuses = [
        {
            name: "Overdue",
            count: 5,
            amount: "USD 183,00$",
            progress: 60,
            color: "bg-purple-700",
        },
        {
            name: "Not Paid",
            count: 5,
            amount: "USD 183,00$",
            progress: 55,
            color: "bg-red-500",
        },
        {
            name: "Partially Paid",
            count: 5,
            amount: "USD 183,00$",
            progress: 50,
            color: "bg-sky-400",
        },
        {
            name: "Fully Paid",
            count: 5,
            amount: "USD 183,00$",
            progress: 55,
            color: "bg-green-600",
        },
        {
            name: "Draft",
            count: 5,
            amount: "USD 183,00$",
            progress: 30,
            color: "bg-yellow-400",
        },
    ];

    return (
        <div
            className="bg-white rounded-3xl p-6 w-full shadow-md" // Hapus max-w-md di sini
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-black text-base font-normal">
                    Invoice Overview
                </h2>
                <button
                    aria-label="Filter settings"
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                >
                    <FontAwesomeIcon
                        icon={faSlidersH}
                        className="text-gray-600 text-sm"
                    />
                </button>
            </div>

            <div className="space-y-5">
                {invoiceStatuses.map((status, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-xs text-black mb-1 font-normal">
                            <span>{status.name}</span>
                            <span className="flex items-center space-x-2">
                                <span>{status.count}</span>
                                <span>|</span>
                                <span>{status.amount}</span>
                            </span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                            <div
                                className={`${status.color} rounded-full`}
                                style={{
                                    width: `${status.progress}%`,
                                    height: "12px",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvoiceOverview;