import Section from '../component/section';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	animateHeroBoxes,
	animateHeroHeader,
} from '../animations/hero-animations';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
	const section1ref = useRef<HTMLDivElement>(null);
	const heroBox1Ref = useRef<HTMLDivElement>(null);
	const heroBox2Ref = useRef<HTMLDivElement>(null);
	const heroBox3Ref = useRef<HTMLDivElement>(null);

	const heoHeaderRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (
				heroBox1Ref.current &&
				heroBox2Ref.current &&
				heroBox3Ref.current
			) {
				animateHeroBoxes(
					heroBox1Ref.current,
					heroBox2Ref.current,
					heroBox3Ref.current
				);
			}
		},
		{ scope: section1ref }
	);

	useGSAP(() => {
		if (heoHeaderRef.current) {
			animateHeroHeader(heoHeaderRef.current);
		}
	});

	const text = 'Typewriter Effect'.split('').map((char, index) => (
		<span key={index} className='typewriter-char'>
			{char === ' ' ? '\u00A0' : char}
		</span>
	));

	return (
		<>
			<Section>
				<div className='content sec-1' ref={section1ref}>
					<h1 className='hero-header' ref={heoHeaderRef}>
						{text}
						<span className='cursor'>|</span>
					</h1>
					<div className='hero-box' ref={heroBox1Ref}></div>
					<div className='hero-box' ref={heroBox2Ref}></div>
					<div className='hero-box' ref={heroBox3Ref}></div>
				</div>
			</Section>
			<Section>
				<div className='content'>
					<h1>Section 02</h1>
				</div>
			</Section>
			<Section>
				<div className='content'>
					<h1>Section 03</h1>
				</div>
			</Section>
			<Section>
				<div className='content'>
					<h1>Section 04</h1>
				</div>
			</Section>
		</>
	);
};

export default HomePage;
