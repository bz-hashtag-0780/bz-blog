import { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from '../ThemeSwitcher';
import LanguageSwitcher from '../LanguageSwitcher';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	// { name: 'Articles', href: '/articles' },
];

const NavItem = ({ item }: any) => (
	<Link href={item.href}>
		<span className="cursor-pointer block lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
			{item.name}
		</span>
	</Link>
);

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="flex justify-between lg:hidden w-full text-customDark dark:text-white">
				<Link className="flex" href="/">
					<span className="cursor-pointer flex items-center font-display text-2xl">
						<div className="flex items-center flex-shrink-0 text-white mr-6">
							<span className="rounded-full p-1.5 px-5 text-xl tracking-tight font-Mitr text-customGray dark:text-white hover:text-customBitcoin dark:hover:text-customBitcoin">
								bz's blog
							</span>
						</div>
					</span>
				</Link>
				<div className="flex items-end">
					<div className="flex mr-10 ">
						<LanguageSwitcher />
					</div>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="absolute top-5 right-5"
					>
						{!isOpen && (
							<svg
								className="menuIcon h-6 w-6"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
							>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
							</svg>
						)}
					</button>
				</div>
			</div>
			<div
				className={`lg:hidden ${
					isOpen
						? 'flex fixed top-0 left-0 w-full h-full items-center pb-20 justify-center bg-black bg-opacity-90 z-10'
						: 'hidden'
				}`}
			>
				<div
					className="flex flex-col items-center text-white text-xl space-y-5"
					onClick={() => setIsOpen(false)}
				>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="absolute top-5 right-5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					{navItems.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
					<ThemeSwitcher />
				</div>
			</div>
		</>
	);
}
