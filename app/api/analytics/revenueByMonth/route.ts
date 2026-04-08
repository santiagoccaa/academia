import { getRevenueByMonth } from "@/actios/getRevenueByMonth";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const data = await getRevenueByMonth()

        return NextResponse.json(data)
    } catch (error) {
        console.log("[GET_REVENUE_BY_MONTH]", error);
        return NextResponse.json("REVENUE NOT FOUND", { status: 500 })
    }
}