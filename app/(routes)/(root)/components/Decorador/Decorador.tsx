interface DecoradorProps {
    positionY: string
    positionX: string
}


export const Decorador = ({ positionX, positionY }: DecoradorProps) => {
    return (
        <div className={`absolute ${positionY} ${positionX} w-90 aspect-square border border-violet-300 rounded-full flex items-center justify-center`}>
            <div className="w-70 aspect-square border border-violet-300 rounded-full flex items-center justify-center">
                <div className="w-50 aspect-square border border-violet-300 rounded-full flex items-center justify-center">
                    <div className="w-30 aspect-square border border-violet-300 rounded-full flex items-center justify-center" />
                </div>
            </div>
        </div>
    )
}

export default Decorador
