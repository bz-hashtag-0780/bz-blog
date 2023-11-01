import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import x from '/public/images/twitter.png';
import zealy from '/public/images/zealy.ico';

export const Footer = () => {
	const { t } = useTranslation('common');

	return (
		<footer className="flex w-full bg-customWhite dark:bg-customDark text-black dark:text-white p-6 md:pt-12 pb-20">
			<div className=" max-w-6xl container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<Link
					href="/"
					className="cursor-pointer flex font-display text-2xl"
				>
					<div className="flexflex-shrink-0 text-white">
						<span className="rounded-full text-xl tracking-tight font-Mitr text-customGray dark:text-white hover:text-customBitcoin dark:hover:text-customBitcoin">
							bz's blog
						</span>
					</div>
				</Link>
				<div>
					<h3 className="font-bold mb-2">{t('Discover')}</h3>
					<ul>
						{/* <li className="mb-2">
							<Link href="/articles" className="hover:underline">
								{t('Articles')}
							</Link>
						</li> */}
						<li className="mb-2">
							<Link href="/projects" className="hover:underline">
								{/* {t('Projects')} */}Projects
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-bold mb-2">
						{/* {t('Community')} */}
						Communities
					</h3>
					<ul>
						<li className="mb-2">
							<a
								href="https://www.basicbeasts.io/"
								className="hover:underline"
							>
								{/* {t('Contribute')} */}Basic Beasts
							</a>
						</li>
						<li className="mb-2">
							<a
								href="https://www.ordinalsacademy.org/"
								className="hover:underline"
							>
								{/* {t('Contribute')} */}Ordinals Academy
							</a>
						</li>
						<li className="mb-2">
							<a
								href="https://flowcdao.com/"
								className="hover:underline"
							>
								{/* {t('Contribute')} */}Flow Community DAO
							</a>
						</li>
						{/* <li className="mb-2">
							<a
								href="https://zealy.io/c/ordinalsacademy/questboard"
								className="hover:underline"
							>
								{t('Donate')}
							</a>
						</li> */}
					</ul>
				</div>

				<div>
					<h3 className="font-bold mb-3">{t('Socials')}</h3>
					<div className="flex space-x-4">
						<a
							href="https://twitter.com/bz_bbclub"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={x.src}
								alt="Twitter"
								width={22}
								height={22}
							/>
						</a>
						{/* <a
							href="https://zealy.io/c/ordinalsacademy/questboard"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={zealy.src}
								alt="Zealy"
								width={20}
								height={20}
							/>
						</a> */}
					</div>
				</div>
			</div>
		</footer>
	);
};
