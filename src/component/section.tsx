interface SectionProps {
	children: React.ReactNode;
}
import React from 'react';

const Section = ({ children }: SectionProps) => {
	return <section>{children}</section>;
};

export default Section;
