'use client'

import { Slider } from './slider'
import { Card } from './components/card'
import { product } from './mock/product'
import { useEffect, useState } from 'react'
import { IProducts } from '@/app/mock/type/products'

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([])
  useEffect(() => {
    setProducts(product)
  }, [])

  return (
    <>
      <div className='h-100vh bg-white'>
        <div className='w-full flex '>
          {products.map((card) => {
            return (
              <Card
                isCustom={card?.isCustom}
                imgSrc={card?.imgSrc}
                pcName={card?.pcName}
                osVersion={card?.osVersion}
                cpuName={card?.cpuName}
                gpuName={card?.gpuName}
                diskDriveName={card?.diskDriveName}
                ramName={card?.ramName}
                savePrice={card?.savePrice}
                currentPrice={card?.currentPrice}
                originalPrice={card?.originalPrice}
                moPrice={card?.moPrice}
                deliveryDate={card?.deliveryDate}
              ></Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
