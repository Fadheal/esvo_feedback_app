import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/login-form"
import { loginAuthMiddleware } from '#/lib/middleware'

export const Route = createFileRoute('/login')({
    component: LoginPage,
    server: {
        middleware: [loginAuthMiddleware]
    }
})

export default async function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <div className='flex justify-center items-center mb-5'>
                    <a href="#" className="flex items-center gap-2 self-center font-medium">
                        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
                            E
                        </div>
                        Esvo
                    </a>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}