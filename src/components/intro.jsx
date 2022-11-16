import { useState, useRef } from 'react'
import { meal } from '../constants/index'
import { Play, Pause } from './icons/icons'

export default function Intro () {
	const [playVideo, setPlayVideo] = useState(false)
	const vidRef = useRef()

	return (
		<div className='h-screen relative'>
			<video
				className='object-cover h-full w-full'
				ref={vidRef}
				src={meal}
				type='video/mp4'
				loop
				controls={false}
				muted
			/>
			<div className='absolute inset-0 bg-[#000000a6] flex justify-center items-center'>
				<div
					className='cursor-pointer w-[100px] h-[100px] rounded-[50%] border-solid border border-golden-50 flex justify-center items-center'
					onClick={() => {
						setPlayVideo(!playVideo)
						if (playVideo) {
							vidRef.current.pause()
						} else {
							vidRef.current.play()
						}
					}}
				>
					{playVideo
						? (
							<Pause />
						)
						: (
							<Play />
						)}
				</div>
			</div>
		</div>
	)
}