import { useForm } from '@tanstack/react-form';
import RichTextEditor from './RichTextEditor';
import { Button } from './ui/button';

function Form() {
    const form = useForm( {
        defaultValues: {
            reaction: 2,
            message: "",
        },
        onSubmit: ({ value }) => {
            console.log(value);
        }
    })
    return (
            <div className="w-full">
                <div className="flex w-full justify-center gap-4">
                    <label className="">
                        <input className="peer hidden" type="radio" name="reaction" value='reaction0' />
                        <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-red-200 peer-checked:to-red-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/disappointed-face.webp"></img>
                    </label>
                    <label>
                        <input className="peer hidden" type="radio" name="reaction" value='reaction1' />
                        <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-yellow-200 peer-checked:to-yellow-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/frowning-face.webp"></img>
                    </label>
                    <label>
                        <input className="peer hidden" type="radio" name="reaction" value='reaction2' defaultChecked />
                        <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-orange-200 peer-checked:to-orange-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/neutral-face.webp"></img>
                    </label>
                    <label>
                        <input className="peer hidden" type="radio" name="reaction" value='reaction3' />
                        <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/slightly-smiling-face.webp"></img>
                    </label>
                    <label>
                        <input className="peer hidden" type="radio" name="reaction" value='reaction4' />
                        <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-purple-200 peer-checked:to-purple-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/smiling-face-with-hearts.webp"></img>
                    </label>
                </div>
                <div className='py-5'>
                    <RichTextEditor/>
                </div>
                <div className='w-full grid grid-cols-2 grid-rows-1 gap-1'>
                    <Button variant="default" className='h-10'>Submit</Button>
                    <Button variant="outline" className='h-10'>Reset</Button>
                </div>
            </div>
    )
}

export default Form