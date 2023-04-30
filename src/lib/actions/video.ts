export function video_background_play(ele: HTMLVideoElement) {
	let observer = new IntersectionObserver((entries, observer) => {
		if (entries[0].isIntersecting) {
			if (ele.paused)
				ele.play()
		}
		else {
			if (!ele.paused)
				ele.pause()
		}
	})

	ele.setAttribute('data-waiting', 'true')

	ele.onwaiting = () => {
		ele.setAttribute('data-waiting', 'true')
	}

	ele.onpause = () => {
		ele.setAttribute('data-waiting', 'true')
	}

	ele.onplaying = () => {
		ele.setAttribute('data-waiting', 'false')
	}

	ele.onclick = () => {
		if (ele.paused)
			ele.play()
		else
			ele.pause()
	}

	observer.observe(ele)

	return {
		destroy() {
			observer.unobserve(ele)
			observer.disconnect()
		}
	}
}
