import { useForm } from '@tanstack/react-form';
import RichTextEditor from './RichTextEditor';
import { Button } from './ui/button';
import { z } from 'zod'
import { addFp } from '#/db/queries';
import { useState } from 'react';
import { Check } from 'lucide-react';

const formSchema = z.object({
    reaction: z.string().max(1, "Unwanted Value"),
    message: z.string().min(15, "Message is required at least 15 character")
})

function Form() {
    const [submitted, setSubmitted] = useState(false)

    const form = useForm( {
        defaultValues: {
            reaction: "2",
            message: "<p>Jadi Gini...</p>",
        },
        validators: {
            onChange: formSchema,
        },
        onSubmit: async ({ value }) => {
            await addFp({ data: {
                reaction: value.reaction,
                messages: value.message
            } })
            form.reset()

            history.replaceState(null, '', window.location.href)

            setSubmitted(true)
        }
    })

    if (submitted) {
        return (
            <div className='w-full h-100% flex justify-center items-center'>
                <div className='h-20 w-20 p-5 bg-linear-to-b from-green-600 to-green-900 rounded-full text-white flex justify-center items-center'>
                    <Check className='h-20 w-20' />
                </div>
            </div>
        )
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <div className="w-full">
                <form.Field
                    name='reaction'
                    children={(field) => (
                        <div className="flex w-full justify-center gap-4">
                            <label>
                                <input
                                    className="peer hidden"
                                    type="radio"
                                    name="reaction"
                                    value='0'
                                    checked={field.state.value === "0"}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-red-200 peer-checked:to-red-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/disappointed-face.webp"></img>
                            </label>
                            <label>
                                <input
                                    className="peer hidden"
                                    type="radio"
                                    name="reaction"
                                    value='1'
                                    checked={field.state.value === "1"}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-yellow-200 peer-checked:to-yellow-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/frowning-face.webp"></img>
                            </label>
                            <label>
                                <input
                                    className="peer hidden"
                                    type="radio"
                                    name="reaction"
                                    value='2'
                                    checked={field.state.value === "2"}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-orange-200 peer-checked:to-orange-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/neutral-face.webp"></img>
                            </label>
                            <label>
                                <input
                                    className="peer hidden"
                                    type="radio"
                                    name="reaction"
                                    value='3'
                                    checked={field.state.value === "3"}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-green-200 peer-checked:to-green-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/slightly-smiling-face.webp"></img>
                            </label>
                            <label>
                                <input
                                    className="peer hidden"
                                    type="radio"
                                    name="reaction"
                                    value='4'
                                    checked={field.state.value === "4"}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                <img className="max-h-15 min-w-15 bg-linear-to-b from-foreground/15 to-foreground/10 border border-solid border-foreground-muted rounded-full flex justify-center items-center peer-checked:from-purple-200 peer-checked:to-purple-100 p-3 transition duration-300 ease-in-out peer-checked:scale-120 cursor-pointer" src="/smiling-face-with-hearts.webp"></img>
                            </label>
                            {field.state.meta.errors.length > 0 && (
                                <p className='text-sm text-red-500'>{field.state.meta.errors[0]?.message}</p>
                            )}
                        </div>
                    )}
                />
                <form.Field
                    name='message'
                    children={(field) => (
                        <div className='py-5'>
                            <RichTextEditor
                                value={field.state.value}
                                onChange={field.handleChange}
                                onBlur={field.handleBlur}
                            />
                            {field.state.meta.errors.length > 0 && field.state.meta.isTouched && (
                                <p className='text-sm text-red-500'>{field.state.meta.errors[0]?.message}</p>
                            )}
                        </div>
                    )}
                />
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children={([canSubmit, isSubmiting]) => (
                        <div className='w-full'>
                            <Button variant="default" className='h-10 w-full' disabled={!canSubmit}>
                                {isSubmiting ? "..." : "Submit"}
                            </Button>
                        </div>
                    )}
                />
            </div>
        </form>
    )
}

export default Form