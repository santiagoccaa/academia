import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { FormCreateCourse } from "../FormCreateCourse"
import { useTranslations } from "next-intl"

const Header = () => {

  const t = useTranslations('academy')
  return (
    <div className='my-4 mx-6 border rounded-lg bg-white'>
      <div className='flex justify-between items-center py-4 px-6'>
        <h1 className='text-2xl '>{t('teacherMode')}</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              Crear curso
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crea tu curso</DialogTitle>
              <FormCreateCourse />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Header
