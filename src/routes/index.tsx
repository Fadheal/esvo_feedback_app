import { HexagonBackground } from '#/components/animate-ui/components/backgrounds/hexagon'
import Form from '#/components/Form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex justify-center items-center h-screen relative">
      <HexagonBackground className='w-full h-full absolute'/>
      <div className='w-fit h-150 bg-white rounded-4xl shadow-xl px-7 absolute border-solid border-gray-200 border'>
        <div className='pt-7 pb-5'>
          <h1 className='text-black font-medium text-xl'>VOLTRA Feedback</h1>
        </div>
        <div className='w-full h-px bg-gray-300'/>
        <div className='py-5 flex flex-col items-center gap-5'>
          <div className='text-black text-center flex flex-col gap-2 pt-5 max-w-90'>
            <h1 className='font-bold text-3xl'>Bagaimana pendapatmu tentang kinerja osis?</h1>
            <p className='text-black/30 text-[14px]'>Beri kami masukan untuk membuat kami lebih baik</p>
          </div>
          <div className='w-full'>
            <Form/>
          </div>
        </div>
      </div>
    </main>
  )
}
