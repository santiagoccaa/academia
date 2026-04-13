import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
    const { userId } = await auth()
    const user = await currentUser()

    if (!user || !userId) {
        return NextResponse.json({ message: "Unathorized" }, { status: 500 })
    }
    
}