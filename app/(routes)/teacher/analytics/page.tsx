import { Payments, SuscriptorsChart, TotalRevenue } from "./components"

export default function AnalytiPage() {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SuscriptorsChart />
                <TotalRevenue />
            </div>
            <Payments />
        </div>
    )
}
