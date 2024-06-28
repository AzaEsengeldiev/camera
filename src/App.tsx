import  { useRef, useEffect } from 'react'
import './App.css'

function App() {
	const videoRef = useRef(null)

	useEffect(() => {
		async function getCameraStream() {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					video: true
				})
				if (videoRef.current) {
					videoRef.current.srcObject = stream
				}
			} catch (error) {
				console.error('Ошибка доступа к камере: ', error)
			}
		}

		getCameraStream()
	}, [])

	return (
		<div className='App'>
			<h1>Camera Access Example</h1>
			<video ref={videoRef} width='640' height='480' autoPlay />
		</div>
	)
}

export default App
