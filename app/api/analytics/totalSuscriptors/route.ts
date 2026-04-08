import { getSuscribersByMonth } from "@/actios/getSuscribersByMonth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await getSuscribersByMonth()
        return NextResponse.json(data)
    } catch (error) {
        console.log("TOTAL_SUSCRIPTORS_ERROR", error);
        return NextResponse.json({ message: "TOTAL SUSCRIPTORS NOT FOUND" }, { status: 500 })
    }
}