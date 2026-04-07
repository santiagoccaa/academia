import { getUserPurchases } from '@/actios/getUserPurchases'
import { getUserReceips } from '@/actios/getUserReceips'
import { currentUser } from '@clerk/nextjs/server'
import { ReceiptText } from 'lucide-react'
import { OrderList } from './components'

export default async function OrdersPage() {

    const user = await currentUser()

    if (!user) {
        return <p className='text-xs'>Not singed in</p>
    }

    const purchases = await getUserPurchases(user.id)
    const receipts = await getUserReceips(user.id)
    return (
        <div className='my-4 mx-6 border rounded-lg bg-white p-6'>
            <div className='flex items-center mb-6 gap-1'>
                <div className='p-2 rounded-full bg-violet-400'>
                    <ReceiptText className='w-4 h-4 text-white' />
                </div>
                <h1 className='text-xl font-semibold'>Todos mis pedidos</h1>
            </div>
            <OrderList purchases={purchases} receipts={receipts} />
        </div>
    )
}
