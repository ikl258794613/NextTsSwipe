interface props {
  handleFunction: () => void
  rotateClass?: string
  disabled?: boolean
}

export const Button = ({
  handleFunction,
  rotateClass = 'rotate-[90deg]',
  disabled = false,
}: props) => {
  const handleButton = () => {
    handleFunction()
  }

  return (
    <>
      <button
        disabled={disabled}
        onClick={handleButton}
        className={
          'btn w-8 h-8 m-2 bg-white group hover:text-white hover:bg-black drop-shadow-lg'
        }
      >
        <div className='flex justify-center items-center mt-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width='25'
            height='25'
            className={rotateClass}
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
    </>
  )
}
