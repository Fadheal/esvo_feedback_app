import Heroes from '#/components/dashboard-Hero'
import { authMiddleware } from '#/lib/middleware'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
    component: Dashboard,
    server: {
        middleware: [authMiddleware]
    }
})

function Dashboard() {
    return (
        <main className='p-10 md:px-20 bg-mist-950 h-screen w-screen'>
            <Heroes />
        </main>
    )
}

export default Dashboard