import Image from 'next/image'
import Affirm from '@/app/icon/icon-affirm.svg'
import { props } from '@/app/components/card/cardType'

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
      <div className='px-4 py-40 lg:p-0 lg:pb-20'>
        <div className='border border-inherit rounded-lg shadow-2xl '>
          <div className='m-4 flex flex-col '>
            <div className='border-2 rounded-full w-20 text-xs text-center font-bold text-slate-400'>
              {isCustom ? 'Custom PC' : 'Prebuilt PC'}
            </div>

            <div className='w-60 h-60 self-center'>
              <Image
                priority={true}
                src={imgSrc}
                alt='Picture of PC'
                width={300}
                height={300}
              />
            </div>

            <div className='m-2 flex flex-col'>
              <h3 className='text-lg text-left font-bold mb-4 truncate'>
                {pcName}
              </h3>
              <div className='text-sm text-left whitespace-nowrap truncate'>
                {osVersion}
              </div>
              <div className='text-sm text-left whitespace-nowrap truncate'>
                {cpuName}
              </div>
              <div className='text-sm text-left whitespace-nowrap truncate'>
                {gpuName}
              </div>
              <div className='text-sm text-left whitespace-nowrap truncate'>
                {diskDriveName}
              </div>
              <div className='text-sm text-left whitespace-nowrap truncate'>
                {ramName}
              </div>
            </div>
          </div>
          <div className='bg-slate-200 p-2'>
            <div className='m-4'>
              <div className='rounded-full w-24 text-xs p-[0.3rem] mb-2 bg-red-500  text-center'>
                <span className='text-white'>SAVE</span>
                <span className='text-white'>${savePrice}</span>
              </div>
              <div className='mb-2 text-left'>
                <span className='text-2xl'>$ {currentPrice}</span>
                <span className='ml-2 text-xs line-through text-slate-500'>
                  ${originalPrice}
                </span>
              </div>

              <p className='text-start cursor-pointer flex items-center mb-2'>
                <span className='mr-2 text-sm'>Starting at</span>
                <span className='text-sky-600 mr-2 text-sm'>
                  ${moPrice} /mo
                </span>
                <span className='text-sm'> with </span>

                <span className='mb-[4px]'>
                  <Affirm width={'50px'} hight={'50px'}></Affirm>
                </span>
              </p>

              <div className='flex justify-between items-end text-left '>
                <div>
                  <p className='font-bold text-xs'>Free Shoping </p>
                  <p className='text-xs whitespace-nowrap'>
                    {isCustom ? 'Estimate Shop BY ' : 'Deliver By '}
                    <span className='text-xs'>{deliveryDate}</span>
                  </p>
                </div>

                <div className=' text-sm cursor-pointer  whitespace-nowrap px-[1rem] py-[0.3rem] flex justify-center items-center text-center font-normal  border-[1px] border-red-500  transition delay-75 rounded-full  text-red-500    hover:bg-red-500 hover:text-slate-200'>
                  {isCustom ? 'Customize ' : 'Buy Now'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
