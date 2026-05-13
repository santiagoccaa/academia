import { NextResponse } from "next/server"

export function apiResponse<T>(body: ApiResponse<T>, init?: ResponseInit) {
    return NextResponse.json<ApiResponse<T>>(body, init)
}

export interface ApiResponse<T> {
    data: T | null,
    message: string,
    error?: unknown,
    status: number
}