import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST() {
    const { userId } = await auth()
    const client = await clerkClient()

    if (!userId) {
        return NextResponse.json({ message: "User not found" }, { status: 500 })
    }
    
    try {
        const response = await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'teacher',
            },
        })
        return NextResponse.json({ message: response }, { status: 200 })

    } catch (error) {
        console.log("[CHANGE_ROLE]", error);
        return NextResponse.json({ message: "NOT_CHANGE_ROLE" }, { status: 500 })
    }
}