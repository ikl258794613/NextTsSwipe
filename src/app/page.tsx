'use client'

import { Card } from './components/card'
import { product } from './mock/product'
import { IProducts } from '@/app/mock/type/products'

import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    setProducts(product)
  }, [])

  const swiperRef = useRef<any>(null)
  const handleSwiperNext = () => {
    swiperRef.current.slideNext()
  }
  const handleSwiperPre = () => {
    swiperRef.current.slidePrev()
  }

  return (
    <>
      <div className='bg-white '>
        <div className=' lg:flex flex-col justify-center items-center hidden'>
          <div className='text-3xl p-2'>Best Seller Gaming PC</div>
          <div className='text-2xl '>Prebuilt & Custom</div>
        </div>
        <div className='lg:flex justify-end p-1 hidden'>
          <button
            onClick={handleSwiperPre}
            className='w-8 h-8 m-2 bg-white group hover:text-white hover:bg-black drop-shadow-lg'
          >
            <div className='flex justify-center items-center mt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                width='25'
                height='25'
                className='rotate-[-90deg]'
                viewBox='0 0 24.4 20.5'
                x='0px'
                y='0px'
                stroke='currentColor'
              >
                <path
                  fill='black'
                  className='group-hover:fill-white'
                  strokeWidth={1}
                  d='M19.2,14.8c-0.3,0-0.5-0.1-0.7-0.3l-6.6-6.9l-6.6,6.9c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l7.4-7.7
                  c0.2-0.2,0.4-0.3,0.7-0.3l0,0c0.3,0,0.5,0.1,0.7,0.3l7.4,7.7c0.4,0.4,0.4,1,0,1.4C19.7,14.7,19.4,14.8,19.2,14.8z'
                />
              </svg>
            </div>
          </button>

          <div className='w-8 h-8 m-2 cursor-pointer flex justify-center items-center  bg-white group hover:text-white hover:bg-black drop-shadow-lg'>
            <button
              onClick={handleSwiperNext}
              className='flex justify-center items-center mt-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                width='25'
                height='25'
                className='rotate-[90deg]'
                viewBox='0 0 24.4 20.5'
                x='0px'
                y='0px'
                stroke='currentColor'
              >
                <path
                  fill='black'
                  className='group-hover:fill-white'
                  strokeWidth={1}
                  d='M19.2,14.8c-0.3,0-0.5-0.1-0.7-0.3l-6.6-6.9l-6.6,6.9c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l7.4-7.7
                  c0.2-0.2,0.4-0.3,0.7-0.3l0,0c0.3,0,0.5,0.1,0.7,0.3l7.4,7.7c0.4,0.4,0.4,1,0,1.4C19.7,14.7,19.4,14.8,19.2,14.8z'
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
              <>
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
              </>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Home
