"use client"

import { ColumnDef } from "@tanstack/react-table"

export type PurchasWithCourse = {
    id: string
    userId: string
    userEmail: string
    courseId: string
    price: number
    createdAt: Date
    updateAt: Date
    course: {
        title: string
        slug: string
        imageUrl: string
        price: string
    }
}

export const columns: ColumnDef<PurchasWithCourse>[] = [
    {
        accessorKey: "createdAtFormatted",
        header: "colum1",
        cell: ({ row }) => {
            const date = new Date(row.original.createdAt).toLocaleDateString("es-ES")
            return <div className="font-semibold">{date}</div>
        }
    },
    {
        accessorKey: "userEmail",
        header: "colum2",
    },
    {
        accessorKey: "course.title",
        header: "colum3",
    },
    {
        accessorKey: "price",
        header: "colum4",
        cell: ({ row }) => {
            const price = row.original.price
            return <div>{price}$</div>
        }
    },
]