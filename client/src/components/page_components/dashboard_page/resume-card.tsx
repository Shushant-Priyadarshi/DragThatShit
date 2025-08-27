import { Button } from '@/components/ui/button'


const ResumeCard = () => {
  return (
    <div className='text-black bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900  px-5 py-2 w-full mt-5 rounded'>
        <div className='flex justify-between items-center'>
            <div >
                <p className='text-xl text-white font-semibold'>Resume Name</p>
                <p className='text-sm text-gray-300'>Last Updated: 23 Dec 2025 </p>
                </div>

            <div className='flex gap-5 '>
                <Button className='bg-gray-100 text-black cursor-pointer' variant={"outline"}>View</Button>
                <Button className='  cursor-pointer' variant={"destructive"}>Delete</Button>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard