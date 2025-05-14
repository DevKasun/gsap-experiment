import Section from '../component/section';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
	const section1ref = useRef<HTMLDivElement>(null);
	const heroBox2Ref = useRef<HTMLDivElement>(null);
	const heroBox3Ref = useRef<HTMLDivElement>(null);
	const heroBox1Ref = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			gsap.fromTo(
				heroBox1Ref.current,
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
				heroBox2Ref.current,
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
				heroBox3Ref.current,
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
		},
		{ scope: section1ref }
	);

	return (
		<>
			<Section>
				<div className='content sec-1' ref={section1ref}>
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
