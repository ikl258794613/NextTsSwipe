interface props {
  isCustom: boolean
  imgSrc: string
  pcName: string
  osVersion: string
  cpuName: string
  gpuName: string
  diskDriveName: string
  ramName: string
  savePrice: string
  currentPrice: string
  originalPrice: string
  moPrice: string
  deliveryDate: string
}
import Image from 'next/image'
export const Card = ({
  isCustom,
  imgSrc,
  pcName,
  osVersion,
  cpuName,
  gpuName,
  diskDriveName,
  ramName,
  savePrice,
  currentPrice,
  originalPrice,
  moPrice,
  deliveryDate,
}: props) => {
  return (
    <>
      <div className='border border-inherit  rounded-lg shadow-2xl w-[25%] '>
        <div className='m-4'>
          <div className='border-2 rounded-full w-20 text-xs text-center font-bold text-slate-400'>
            {isCustom ? 'Custom PC' : 'Prebuilt PC'}
          </div>

          <Image src={imgSrc} alt='Picture of PC' width={400} height={400} />

          <div className='m-2'>
            <h3 className='text-lg mb-4 truncate'>{pcName}</h3>
            <p className='text-sm'> {osVersion}</p>
            <p className='text-sm'> {cpuName}</p>
            <p className='text-sm'> {gpuName}</p>
            <p className='text-sm'> {diskDriveName}</p>
            <p className='text-sm'> {ramName}</p>
          </div>
        </div>
        <div className='bg-slate-200 p-2'>
          <div className='m-4'>
            <div className='rounded-full w-20 text-xs p-2 mb-2 bg-red-600  text-center'>
              <span className='text-white'>SAVE</span>
              <span className='text-white'>${savePrice}</span>
            </div>
            <div className='mb-2'>
              <span className='text-3xl'>$ {currentPrice}</span>
              <span className='ml-2 text-xs line-through text-slate-500'>
                ${originalPrice}
              </span>
            </div>

            <div className='flex items-center mb-2'>
              <span className='mr-2'>Starting at</span>
              <span className='text-sky-600 mr-2'>${moPrice} /mo</span>
              <span> with </span>

              <span>
                <Image
                  src={'/icon/icon-affirm.svg'}
                  alt='icon'
                  width={50}
                  height={50}
                ></Image>
              </span>
            </div>

            <div className='flex justify-between gap-2xl'>
              <div>
                <p className='font-bold'>Free Shoping </p>
                <p>
                  {isCustom ? 'Estimate Shop BY ' : 'Deliver By '}
                  <span>{deliveryDate}</span>
                </p>
              </div>

              <div className='cursor-pointer flex justify-center font-bold text-lg items-center border-2 border-red-600  transition delay-150 rounded-full w-32 text-red-600  text-center  hover:bg-red-600 hover:text-slate-200'>
                {isCustom ? 'Customize ' : 'Buy Now'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
