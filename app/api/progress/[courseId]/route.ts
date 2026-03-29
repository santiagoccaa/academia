import { currentUser } from '@clerk/nextjs/server'
import { getUserProgreesByCourse } from '@/actios/getUserProgreesByCourse'
import { NextResponse } from 'next/server'

interface Params {
    params: Promise<{ courseId: string }>
}

export async function GET(req: Request, { params }: Params) {
    const user = await currentUser()

    const {courseId} = await params

    if (!user) {
        return NextResponse.json({ progress: 0 })
    }

    const progress = await getUserProgreesByCourse(courseId, user.id)

    return NextResponse.json({ progress })
}