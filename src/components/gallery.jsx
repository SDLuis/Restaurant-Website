import { useRef } from 'react'
import { images } from '../constants'
import { Left, Right, Instagram } from './icons/icons'

export default function Gallery () {
	const scrollRef = useRef(null)

	const scroll = (direction) => {
		const { current } = scrollRef

		if (direction === 'left') {
			current.scrollLeft -= 300
		} else {
			current.scrollLeft += 300
		}
	}

	return (
		<div className='flex-row py-16 pl-24 h-[80vh] flex justify-center items-center bg-selfblack-50'>
			<div className='min-w-full md:min-w-[500px] pr-8 flex flex-1 flex-col justify-center items-start'>
				<div style={{ marginBottom: '1rem' }}>
					<p className='text-white font-Cormorant font-bold tracking-[0.04em] capitalize leading-7 lg:leading-[67px] text-[19px] sm:text-2xl'>Instagram</p>
					<p><img src={images.spoon} alt='spoon_image' className='w-11 lg:w-20' /></p>
				</div>
				<h1 className='text-[45px] leading-[70px] sm:text-[64px] sm:leading-[83.2px] font-Cormorant text-golden-50 capitalize tracking-[0.04em]'>Photo Gallery</h1>
				<p className='leading-7 font-Opensans font-normal tracking-[0.04em] text-base capitalize my-8 text-selfgray-50' style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
				<button type='button' className='mt-4 bg-crimson-50 text-selfblack-50 font-Cormorant tracking-[0.04em] leading-7 rounded-[1px] border-none cursor-pointer outline-none py-2 px-6 font-bold text-base lg:text-lg'>View More</button>
			</div>
			<div className='my-20 flex flex-1 flex-row relative max-w-full lg:max-w-[50%]'>
				<div className='app__gallery-images_container scrollbar-hide flex flex-row w-max overflow-x-auto' ref={scrollRef}>
					{[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
						<div className='app__gallery-images_card group relative min-w-[301px] h-[447px] mr-8 flex justify-center items-center' key={`gallery_image-${index + 1}`}>
							<img className='w-full h-full object-cover opacity-100 transition ease-in-out duration-500 hover:opacity-40' src={image} alt='gallery_image' />
							<span className='opacity-0 group-hover:opacity-100 absolute cursor-pointer transition ease-in-out duration-500 text-[2rem]'>
								<Instagram/>
							</span>
						</div>
					))}
				</div>
				<div className='app__gallery-images_arrows w-full flex justify-between items-center px-4 absolute bottom-[5%]'>
					<span className='text-[2rem] cursor-pointer text-golden-50 rounded-[5px] bg-black hover:text-white' onClick={() => scroll('left')} ><Left /></span>
					<span className='text-[2rem] cursor-pointer text-golden-50 rounded-[5px] bg-black hover:text-white' onClick={() => scroll('right')}><Right /></span>
				</div>
			</div>
		</div>
	)
};