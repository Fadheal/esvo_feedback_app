interface CardProps {
    id: string;
    time: string;
    text: string;
    expression: string;
} 

function Card({id, time, text, expression}: CardProps) {
    const ExpressionList = () => {
        if (expression === '0') {
            return (
                <div className="flex gap-3 items-center">
                    <img className="max-h-8 min-w-8 bg-linear-to-b border border-solid border-foreground-muted rounded-full flex justify-center items-center from-orange-200 to-orange-100 p-1.5 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer"
                    src="/disappointed-face.webp"
                    />
                    <span className="font-bold text-white">Apa apaan ini</span>
                </div>
            )
        } else if (expression === '1') {
            return (
                <div className="flex gap-3 items-center">
                    <img className="max-h-8 min-w-8 bg-linear-to-b border border-solid border-foreground-muted rounded-full flex justify-center items-center from-orange-200 to-orange-100 p-1.5 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer"
                    src="/frowning-face.webp"
                    />
                    <span className="font-bold text-white">Gini Banget Dah</span>
                </div>
            )
        } else if (expression === '2') {
            return (
                <div className="flex gap-3 items-center">
                    <img className="max-h-8 min-w-8 bg-linear-to-b border border-solid border-foreground-muted rounded-full flex justify-center items-center from-orange-200 to-orange-100 p-1.5 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer"
                    src="/neutral-face.webp"
                    />
                    <span className="font-bold text-white">B aja sih</span>
                </div>
            )
        } else if (expression === '3') {
            return (
                <div className="flex gap-3 items-center">
                    <img className="max-h-8 min-w-8 bg-linear-to-b border border-solid border-foreground-muted rounded-full flex justify-center items-center from-orange-200 to-orange-100 p-1.5 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer"
                    src="/slightly-smiling-face.webp"
                    />
                    <span className="font-bold text-white">Bagus sih</span>
                </div>
            )
        } else if (expression === '4') {
            return (
                <div className="flex gap-3 items-center">
                    <img className="max-h-8 min-w-8 bg-linear-to-b border border-solid border-foreground-muted rounded-full flex justify-center items-center from-orange-200 to-orange-100 p-1.5 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer"
                    src="/smiling-face-with-hearts.webp"
                    />
                    <span className="font-bold text-white">BAGUS BANGET WOEE</span>
                </div>
            )
        }
    }

    return (
        <div className="bg-mist-900 p-5 max-w-80 rounded-xl border border-solid border-white/10">
            <div className="flex flex-col gap-3 justify-between h-full">
                <ExpressionList />
                <div className="px-1">
                    <p className="text-white">
                        {text}
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground/75">{time}</p>
                    <p className="text-xs text-muted-foreground/20">{id}</p>
                </div>
            </div>
        </div>
    )
}

export default Card