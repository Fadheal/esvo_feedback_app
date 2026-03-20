import { HexagonBackground } from '#/components/animate-ui/components/backgrounds/hexagon'
import Form from '#/components/Form'
import ThemeToggle from '#/components/ThemeToggle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex justify-center items-center h-screen relative">
      <HexagonBackground className='w-full h-full absolute'/>
      <div className='w-fit min-h-150 h-auto rounded-4xl bg-background shadow-xl px-10 absolute border-solid border-foreground-muted border'>
        <div className='pt-7 pb-5 flex justify-between'>
          <h1 className='font-medium text-xl'>VOLTRA Feedback</h1>
          <ThemeToggle/>
        </div>
        <div className='w-full h-px bg-muted'/>
        <div className='py-5 flex flex-col items-center gap-8'>
          <div className='text-center flex flex-col gap-2 pt-5 max-w-90'>
            <h1 className='font-bold text-3xl'>Bagaimana pendapatmu tentang kinerja osis?</h1>
            <p className='30 text-[14px]'>Beri kami masukan untuk membuat kami lebih baik</p>
          </div>
          <div className='w-full'>
            <Form/>
          </div>
        </div>
      </div>
    </main>
  )
}
