import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import FrankenImage from 'public/professor_franken.jpg';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

type Props = {
	// Add custom props here
};

export default function Projects(
	_props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const { t } = useTranslation('common');
	const [isAtTop, setIsAtTop] = useState(false);

	const sentinelRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsAtTop(!entry.isIntersecting);
			},
			{
				threshold: [0],
			}
		);

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current);
		}

		return () => {
			if (sentinelRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(sentinelRef.current);
			}
		};
	}, []);

	const data = [
		// {
		// 	id: 1,
		// 	title: t('bitcoinNode.title'),
		// 	description: t('bitcoinNode.description'),
		// 	slug: 'bitcoin-node',
		// },
		// {
		// 	id: 2,
		// 	title: t('bitcoinProtocol.title'),
		// 	description: t('bitcoinProtocol.description'),
		// 	slug: 'bitcoin-protocol',
		// },
		// {
		// 	id: 3,
		// 	title: t('brc20.title'),
		// 	description: t('brc20.description'),
		// 	slug: 'brc-20',
		// },
		{
			id: 1,
			title: 'Basic Beasts',
			description:
				'A Pokémon-inspired collectibles game with the first on-chain evolution & breeding system on Flow',
			slug: 'basic-beasts',
		},
		{
			id: 2,
			title: 'Ordinals Academy',
			description: 'A one-stop guide to Bitcoin Ordinals',
			slug: 'ordinals-academy',
		},
		{
			id: 3,
			title: 'Wonder Arena',
			description: 'An on-chain, mobile-first auto-battler game',
			slug: 'wonder-arena',
		},
		{
			id: 4,
			title: 'Wonderland',
			description: 'A social experience: Super Smash Bros meets NFTs',
			slug: 'wonder-arena',
		},
		{
			id: 5,
			title: 'Ordinals Global',
			description: 'Daily news about Bitcoin Ordinals, BRC20, and more',
			slug: 'ordinals-global',
		},
	];

	const organizedData: { [key: string]: any[] } = {};

	data.forEach((term: any) => {
		let key = term.title[0].toUpperCase();

		// If the key is a number, group under '#'
		if (!isNaN(parseInt(key))) {
			key = '#';
		}

		if (!organizedData[key]) {
			organizedData[key] = [];
		}
		organizedData[key].push(term);
	});

	const renderCategory = (key: string, terms: any[], index: number) => (
		<div
			key={key}
			id={key}
			className={`flex flex-col md:flex-row items-start ${
				index === 0 ? 'pt-0' : 'pt-20'
			} pb-10 border-b border-solid border-[rgb(43,48,53)]`}
		>
			<div className="flex-shrink-0 w-full md:w-[100px] mb-4 md:mb-0 md:mr-8 p-5 pb-0 md:p-0">
				<div
					className="text-5xl font-semibold leading-[80px]"
					style={{
						WebkitTextFillColor: 'rgb(20, 21, 26)',
						WebkitTextStroke: '1px rgb(230, 232, 234)',
					}}
				>
					{key}
				</div>
			</div>
			<div>
				{terms.map((term: any) => (
					<div
						key={term.id}
						className="p-5 mb-2 hover:bg-white hover:dark:bg-customDarker hover:cursor-pointer rounded-[10px]"
					>
						{/* todo <Link href={`/projects/${term.slug}`}> */}
						<h2 className="mb-3 font-semibold text-2xl leading-10">
							{term.title}
						</h2>
						<div>{term.description}</div>
						{/* </Link> */}
					</div>
				))}
			</div>
		</div>
	);

	return (
		<>
			<Head>
				<title>{"Projects | bz's blog"}</title>
				<meta property="og:title" content={"Projects | bz's blog"} />
			</Head>
			<div className="min-h-screen flex flex-col pb-20 justify-center items-center bg-center bg-no-repeat bg-cover bg-customWhite text-black dark:bg-customDark dark:text-white">
				<div className="py-20 px-6 md:px-20 w-full mx-auto bg-white dark:bg-customDarker items-center justify-center">
					<div className="flex items-center grid grid-cols-1 md:grid-cols-2 gap-8 grid-rows-auto">
						<div className="md:ml-20 md:px-6 md:px-20">
							<h1 className="text-3xl md:text-4xl leading-18 mb-4 font-semibold">
								{/* {t('terminologyHeader.title')} */}
								bz's work
							</h1>
							<p className="text-xl font-normal leading-[1.45] text-base">
								{/* {t('terminologyHeader.description')} */}
								building the future of next generation apps.
							</p>
						</div>
						<div className="relative overflow-hidden text-center max-w-[500px] rounded-lg mt-6 md:mt-0">
							{/* <Image
								src={FrankenImage.src}
								alt="Bitcoin Ordinals Terminology"
								width={500}
								height={500}
							/> */}
						</div>
					</div>
				</div>

				<div
					ref={sentinelRef}
					style={{ height: '40px', width: '100%' }}
				></div>
				<div
					className={`p-4 mx-auto sticky top-0 z-9 w-full items-center justify-center flex transition-all ${
						isAtTop ? 'bg-customGray text-white' : ''
					}`}
				>
					<div className="max-w-[1136px] items-center grid grid-cols-1 grid-rows-auto">
						<div className="flex flex-wrap gap-2">
							{Object.keys(organizedData)
								.sort()
								.map((key) => (
									<Link
										href={`#${key}`}
										key={key}
										className="p-2 hover:font-bold rounded"
									>
										{key}
									</Link>
								))}
						</div>
					</div>
				</div>
				<div className="max-w-[1136px] pt-0 p-4">
					{Object.keys(organizedData)
						.sort()
						.map((key, index) =>
							renderCategory(key, organizedData[key], index)
						)}
				</div>
			</div>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common'])),
	},
});
