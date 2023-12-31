import { getPostsByLocale } from '@/utils/posts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticlesDisplay from '@/components/ArticlesDisplay';
import Head from 'next/head';
import SubstackCTA from '@/components/SubstackCTA';
import { useTranslation } from 'next-i18next';

export default function ArticlesOverview({ articles }: any) {
	const { t } = useTranslation('common');
	return (
		<>
			<Head>
				<title>{"Articles | bz's blog"}</title>
				<meta property="og:title" content={"Articles | bz's blog"} />
			</Head>
			<div className="flex flex-col items-center pt-10 md:pt-20 pb-0  bg-customWhite text-black dark:bg-customDark dark:text-white">
				<div className="w-full max-w-7xl mb-20">
					<div className="items-start flex justify-between">
						<h1 className="text-2xl font-bold ml-6 md:ml-0 mb-6">
							{t('Articles')} ({articles.length})
						</h1>
					</div>
					<ArticlesDisplay articles={articles} />
				</div>
				<SubstackCTA />
			</div>
		</>
	);
}

export async function getStaticProps({ locale }: any) {
	const allPostsData = getPostsByLocale(locale);

	return {
		props: {
			articles: allPostsData,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
