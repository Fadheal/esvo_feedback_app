import Heroes from '#/components/dashboard-Hero'
import { Button } from '#/components/ui/button'
import { Show, SignInButton, useUser } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
    component: Dashboard,
})

function Dashboard() {
    return (
        <main className='p-10 md:px-20 bg-mist-950 h-screen w-screen'>
            <Show when="signed-in">
                <Heroes />
            </Show>
            <Show when="signed-out">
                <div className='flex justify-center items-center w-full h-full'>
                    <div className='w-fit max-w-110 h-fit rounded-4xl bg-background shadow-xl p-10 absolute border-solid border-foreground-muted border'>
                        <div className='py-5 flex flex-col items-center gap-8'>
                            <div className='text-center flex flex-col gap-2 pt-5 max-w-90'>
                                <h1 className='font-bold text-3xl'>Sorry this area is restricted</h1>
                                <p className='30 text-[14px]'>Sorry for some reason this area is need authentication by login</p>
                            </div>
                            <SignInButton>
                                <Button variant='default'>Sign In</Button>
                            </SignInButton>
                        </div>
                    </div>
                </div>
            </Show>
        </main>
    )
}

export default Dashboard