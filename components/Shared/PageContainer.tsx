
interface PageContainerProp {
    children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProp) => {
    return (
        <div className="contain-content mx-auto px-2 md:px-8 lg:px-12">
            {children}
        </div>
    )
}
