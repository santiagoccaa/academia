"use client"

import { formatPrice } from '@/lib/formatPrice'
import { OrderListProps } from './OrderList.types'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const OrderList = ({ purchases, receipts }: OrderListProps) => {

    const t = useTranslations('academy.formOrders')

    const totalPurchases = purchases.reduce((acc, purchase) => {

        const rawPrice = purchase.course.price?.replace(',', '.')

        const price = rawPrice && !isNaN(Number(rawPrice)) ? parseFloat(rawPrice) : 0

        return acc + price
    }, 0)

    const formattedTotal = formatPrice(totalPurchases.toString() || "0")

    const donwloadReceipt = (index: number) => {
        const receiptUrl = receipts[index].receipUrl
        if (receiptUrl) {
            window.open(receiptUrl)
        } else {
            toast.error("No se ha encontrado el recibo.")
        }
    }
    return (
        <Table className='my-6'>
            <TableCaption>{t('footer')}</TableCaption>
            <TableHeader className='bg-slate-100'>
                <TableRow>
                    <TableHead className="w-25">{t('date')}</TableHead>
                    <TableHead>{t('course')}</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">{t('receipt')}</TableHead>
                    <TableHead className="text-right">{t('price')}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    purchases.map((purchase, index) => (
                        <TableRow key={purchase.id}>
                            <TableCell className='font-medium'>
                                {purchase.cretedAtFormated}
                            </TableCell>
                            <TableCell>
                                {purchase.course.title}
                            </TableCell>
                            <TableCell>
                                <span className='bg-green-100 text-green-600 py-1 px-2 rounded-md text-sm'>{t('message2')}</span>
                            </TableCell>
                            <TableCell className='text-center'>
                                <Button variant={"outline"} onClick={() => donwloadReceipt(index)}>
                                    {t('message')}
                                    <ExternalLink className='w-4 h-4' />
                                </Button>
                            </TableCell>
                            <TableCell className='text-right'>
                                {formatPrice(purchase.course.price)}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>
                        {t('total')}
                    </TableCell>
                    <TableCell className='text-right'>
                        {formattedTotal}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default OrderList
