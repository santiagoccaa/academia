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

  const t = useTranslations()
  return (
    <div className='my-4 mx-6 border rounded-lg bg-white'>
      <div className='flex justify-between items-center py-4 px-6'>
        <h1 className='text-2xl '>{t('academy.teacherMode')}</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">
              {t('common.create')}
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {t('common.createYou')}
              </DialogTitle>
              <FormCreateCourse />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Header
