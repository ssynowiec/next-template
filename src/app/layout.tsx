import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const fontSans = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html lang="en">
			<body
				className={cn(
					'bg-background min-h-screen font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
