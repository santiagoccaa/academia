"use client"

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { toast } from "sonner"

export const Test = () => {

    const user = useUser()
    const handleChangeRole = async () => {
        try {
            const res = await axios.post('api/changeRole')
            console.log(res);

            toast("Tu rol ahora es de maestro")
        } catch (error) {
            console.log(error);
            toast("algo salio mal")
        }
    }

    console.log("Data:", user?.user?.publicMetadata);

    return (
        <>
            <Button
                onClick={handleChangeRole}
            >
                Hacerme profesor
            </Button>

            <div className="py-2">
                Tu rol es:
            </div>
        </>
    )
}
