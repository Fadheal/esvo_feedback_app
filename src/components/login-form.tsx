import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { useForm } from "@tanstack/react-form"
import { authClient } from "#/lib/auth-client"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const form = useForm( {
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onChange: formSchema,
        },
        onSubmit: async ({ value }) => {
            await authClient.signIn.email(
                {
                    email: value.email,
                    password: value.password,
                    callbackURL: '/dashboard'
                },
                {
                    onSuccess: () => {
                        toast.success('Login Successful')
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message)
                    },
                }
            )

        }
    })
    return (
        <div className={cn("flex flex-col gap-6 px-64", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome back</CardTitle>
                <CardDescription>
                    Login with your Esvo account
                </CardDescription>
                </CardHeader>
                <CardContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                >
                    <FieldGroup>
                        <form.Field 
                            name="email"
                            children={(field) => (
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        required
                                    />
                                    {field.state.meta.errors.length > 0 && field.state.meta.isTouched && (
                                        <p className='text-sm text-red-500'>{field.state.meta.errors[0]?.message}</p>
                                    )}
                                </Field>
                            )}
                        />
                        <form.Field 
                            name="password"
                            children={(field) => (
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        required
                                    />
                                    {field.state.meta.errors.length > 0 && field.state.meta.isTouched && (
                                        <p className='text-sm text-red-500'>{field.state.meta.errors[0]?.message}</p>
                                    )}
                                </Field>
                            )}
                        />
                        <form.Subscribe
                            selector={(state) => [state.canSubmit, state.isSubmitting]}
                            children={([canSubmit, isSubmiting]) => (
                                <Field>
                                    <Button type="submit" disabled={!canSubmit}>
                                        {isSubmiting ? "LoginIn..." : "Login"}
                                    </Button>
                                    <FieldDescription className="text-center">
                                    Don&apos;t have an account? You can&apos;t sign up here.
                                    </FieldDescription>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
