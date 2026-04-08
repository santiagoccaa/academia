import { getLastPurchases } from "@/actios/getLastPurchases"
import { DataTable } from "./data-table"
import { columns, PurchasWithCourse } from "./coumns"

export const Payments = async () => {

    const lasPurchases = await getLastPurchases()
    return (
        <div className="mx-auto mt-10 w-full border shadow-md bg-white p-4 rounded-md">
            <DataTable columns={columns} data={lasPurchases as PurchasWithCourse[]} />
        </div>
    )
}

export default Payments