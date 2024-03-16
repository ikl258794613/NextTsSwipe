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
}: props) => {
  return (
    <>
      <div className='w-[25%] border rounded-lg drop-shadow-2xl'>
        <div className='m-4'>
          <div className='border-2 rounded-full w-20 text-xs text-center'>
            {isCustom ? 'Custom PC' : 'Prebuilt PC'}
          </div>

          <Image src={imgSrc} alt='Picture of PC' width={500} height={500} />

          <div className='m-2'>
            <h3 className='text-lg mb-4'>{pcName}</h3>
            <p className='text-sm'> {osVersion}</p>
            <p className='text-sm'> {cpuName}</p>
            <p className='text-sm'> {gpuName}</p>
            <p className='text-sm'> {diskDriveName}</p>
            <p className='text-sm'> {ramName}</p>
          </div>
        </div>
        <div className='bg-slate-200'>
          <div className='m-4'>
            <div className='rounded-full w-20 text-xs p-2 bg-red-600  text-center'>
              <span className='text-white'>SAVE</span>
              <span className='text-white'>$ {savePrice}</span>
            </div>
            <div>
              <span className='text-3xl'>$ {currentPrice}</span>
              <span className='ml-2 text-xs line-through text-slate-500'>
                $ {originalPrice}
              </span>
            </div>

            <div className='flex'>
              <span>Starting at</span>
              <span className='text-sky-600'>$ {moPrice} /mo</span>
              <span> with </span>
              <Image
                src={'/icon/icon-affirm.svg'}
                alt='icon'
                width={20}
                height={20}
              ></Image>
            </div>

            <div className='flex '>
              <div>
                <p>free shoping / 加粗</p>
                <p>
                  {isCustom ? ' Estimate ' : ' Deliver by '} <span>日期</span>
                </p>
              </div>
              <div>
                <div className='border-2 border-red-600 rounded-full w-20 text-xs text-center'>
                  {isCustom ? 'Customize ' : 'Buy now'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
