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
        header: "Fecha de compra",
        cell: ({ row }) => {
            const date = new Date(row.original.createdAt).toLocaleDateString("es-ES")
            return <div className="font-semibold">{date}</div>
        }
    },
    {
        accessorKey: "userEmail",
        header: "Cliente",
    },
    {
        accessorKey: "course.title",
        header: "Curso",
    },
    {
        accessorKey: "price",
        header: "Precio",
        cell: ({ row }) => {
            const price = row.original.price
            return <div>{price}$</div>
        }
    },
]