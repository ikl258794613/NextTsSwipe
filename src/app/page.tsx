'use client'

import { Card } from './components/card/card'
import { Button } from './components/button/button'
import { product } from './mock/product'
import { IProducts } from '@/app/mock/type/products'

import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([])

  const swiperRef = useRef<any>(null)

  const handleSwiperNext = () => {
    if (swiperRef !== null) {
      swiperRef.current.slideNext()
    }
  }

  const handleSwiperPre = () => {
    if (swiperRef !== null) {
      swiperRef.current.slidePrev()
    }
  }

  useEffect(() => {
    setProducts(product)
  }, [])

  return (
    <>
      <div className='bg-white '>
        <div className='lg:flex flex-col justify-center items-center hidden'>
          <div className='text-3xl p-2'>Best Seller Gaming PC</div>
          <div className='text-2xl '>Prebuilt & Custom</div>
        </div>
        <div className='lg:flex justify-end p-1 hidden'>
          <Button
            handleFunction={handleSwiperPre}
            rotateClass={'rotate-[-90deg]'}
            disabled={products.length <= 4}
          />
          <Button
            handleFunction={handleSwiperNext}
            rotateClass={'rotate-[90deg]'}
            disabled={products.length <= 4}
          />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className='mySwiper'
        >
          {products.map((card) => {
            return (
              <SwiperSlide key={card.ssn}>
                <Card
                  key={card.ssn}
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
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Home
