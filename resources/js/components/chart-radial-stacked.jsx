"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


export const description = "A donut chart";

const chartData = [
    { status: "In Progress", value: 44, fill: "#F97316" }, // Orange
    { status: "Completed", value: 32, fill: "#3B82F6" }, // Blue
    { status: "Pending", value: 12, fill: "#EAB308" }, // Yellow
];

const chartConfig = {
    value: {
        label: "Tasks",
    },
    "In Progress": {
        label: "In Progress",
        color: "#F97316",
    },
    Completed: {
        label: "Completed",
        color: "#3B82F6",
    },
    Pending: {
        label: "Pending",
        color: "#EAB308",
    },
};

function ChartPieDonut() {
    return (
        <Card className="flex flex-col">
                <CardHeader className="items-left pb-0">
  <div className="flex justify-between items-center w-full">
    <CardTitle>Task Overview</CardTitle>
    <TrendingUp className="h-4 w-4 text-muted-foreground" />
  </div>
</CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="status"
                            innerRadius={60}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 text-sm">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#F97316]" />
                        In Progress
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                        Completed
                    </div>                    
                </div>
                <div className="text-muted-foreground text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#EAB308]" />
                        Pending
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default ChartPieDonut;
