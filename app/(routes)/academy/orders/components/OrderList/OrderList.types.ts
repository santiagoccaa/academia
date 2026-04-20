export type PurchaseWithCourse = {
    id: string
    userId: string
    courseId: string
    course: {
        id: string
        title: string
        price: string | null
    }
}

export type PurchaseWithFormattedDate = PurchaseWithCourse & {
    cretedAtFormated: string
}

export type OrderListProps = {
    purchases: PurchaseWithFormattedDate[]
    receipts: {
        patmentIntendId: string
        receipUrl: string | null
    }[]
}