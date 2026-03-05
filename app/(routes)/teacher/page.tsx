import { currentUser } from "@clerk/nextjs/server"
import { Header } from "./components"

export default async function TeacherPage() {
    const user = await currentUser()
    if (!user) return

    return (
        <div>
            <Header />
        </div>
    )
}
