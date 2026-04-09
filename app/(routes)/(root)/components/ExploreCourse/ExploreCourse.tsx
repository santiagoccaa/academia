import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const ExploreCourse = () => {
    return (
        <div className="my-4 mx-6 border bg-white rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4">
                <div className="p-6 flex flex-col gap-3">
                    <h1 className="text-4xl font-semibold">
                        Explora todos los cursos
                    </h1>
                    <p className="text-balance max-w-2xl">
                        Bienvenido a nuestra academia
                        Aquí comienza tu camino hacia el aprendizaje y el crecimiento.

                        Explora una amplia variedad de cursos diseñados para potenciar tus habilidades, avanzar en tu carrera y ayudarte a alcanzar tus metas. Ya sea que estés empezando o buscando llevar tus conocimientos al siguiente nivel, tenemos algo para ti.

                        Descubre todo lo que hemos preparado y da el siguiente paso en tu formación.
                        ¡Tu futuro empieza hoy!
                    </p>
                    <Button className="w-fit" asChild>
                        <Link href={"/courses"}>
                            Empezar a aprender
                        </Link>
                    </Button>
                </div>

                <div className="flex items-end">
                    <Image src={"/home_image.svg"} alt="explora todos los cursos" width={300} height={200} />
                </div>
            </div>
        </div>
    )
}

export default ExploreCourse