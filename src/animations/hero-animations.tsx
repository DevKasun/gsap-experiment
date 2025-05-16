import gsap from 'gsap';

export const animateHeroBoxes = (
	heroBox1: HTMLDivElement,
	heroBox2: HTMLDivElement,
	heroBox3: HTMLDivElement
) => {
	gsap.fromTo(
		heroBox1,
		{
			x: -100,
			opacity: 0,
			scale: 0.5,
		},
		{
			x: 100,
			opacity: 1,
			duration: 5,
			scale: 1,
			ease: 'power2.inOut',
			repeat: -1,
			yoyo: true,
		}
	);

	gsap.fromTo(
		heroBox2,
		{
			x: 100,
			opacity: 0,
			scale: 0.5,
		},
		{
			x: -100,
			opacity: 1,
			duration: 10,
			scale: 1,
			ease: 'power2.inOut',
			repeat: -1,
			yoyo: true,
		}
	);

	gsap.fromTo(
		heroBox3,
		{
			x: -100,
			opacity: 0,
			scale: 0.5,
		},
		{
			x: 100,
			opacity: 1,
			duration: 15,
			scale: 1,
			ease: 'power2.inOut',
			repeat: -1,
			yoyo: true,
		}
	);
};
