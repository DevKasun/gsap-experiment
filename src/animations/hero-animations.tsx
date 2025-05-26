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
			ease: 'bounce.inOut',
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
			duration: 5,
			scale: 1,
			ease: 'elastic.inOut',
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
			duration: 5,
			scale: 1,
			ease: 'sine.inOut',
			repeat: -1,
			yoyo: true,
		}
	);
};

export const animateHeroHeader = (heroHeaderEl: HTMLDivElement | null) => {
	if (!heroHeaderEl) return;
	if (heroHeaderEl) {
		const chars = heroHeaderEl.querySelectorAll('.typewriter-char');
		gsap.fromTo(
			chars,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.05,
				stagger: 0.1,
				ease: 'none',
				repeat: -1,
				yoyo: true,
			}
		);
		gsap.to(heroHeaderEl.querySelector('.cursor'), {
			opacity: 0,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
			ease: 'none',
		});
	}
};
