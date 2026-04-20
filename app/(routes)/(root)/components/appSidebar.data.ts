import { CERTIFICATES, COURSES, HOME, MY_COURSES, ORDERS } from "@/const/routes";
import { Award, BookOpen, ChartArea, GraduationCap, House, ReceiptText, Settings2, SquareTerminal } from "lucide-react";

export const routes = [
    {
        title: "Home",
        url: HOME,
        icon: House
    },
    {
        title: "Cursos",
        url: COURSES ,
        icon: SquareTerminal
    },
    {
        title: "Mis Cursos",
        url: MY_COURSES,
        icon: BookOpen
    },
    {
        title: "Pedidos",
        url: ORDERS,
        icon: ReceiptText
    },
    {
        title: "Certificados",
        url: CERTIFICATES,
        icon: Award 
    },
]

export const routesTeacher = [
    {
        title: "Cursos",
        url: "/teacher",
        icon: GraduationCap
    },
    {
        title: "Analiticas",
        url: "/teacher/analytics",
        icon: ChartArea
    },
]