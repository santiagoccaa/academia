import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { AcademyService } from "./Services"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const CardServices = (service: AcademyService) => {
  const { description, href, icon: Icon, title, color } = service

  return (
    <Card className="full">
      <CardTitle className="text-2xl font-bold flex px-6 items-center gap-2 text-gray-800">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon />
        </div>
        {title}
      </CardTitle>
      <CardContent className="text-base text-gray-600 text-justify">
        {description}
      </CardContent>
      <CardFooter>
        <Link href={href} className="text-sm font-medium text-violet-500 flex gap-2 items-center group">
          Learm More <ChevronRight size={15} className="group-hover:translate-x-1 duration-300" />
        </Link>
      </CardFooter>
    </Card>
  )
}
