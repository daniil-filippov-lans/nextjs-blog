import css from './layout.module.css';
import Image from 'next/image';
import Head from 'next/head';
import utilsCss from '../styles/utils.module.css';
import Link from 'next/link';
import React from 'react';

const name = 'Danya';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div className={css.container}>
			<Head>
				<link rel="icon" href="/public/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta property="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={css.header}>
				{home ? (
					<>
						{' '}
						<Image
							priority
							src="/images/profile.jpg"
							className={utilsCss.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>{' '}
						<h1 className={utilsCss.heading2Xl}>{name}</h1>{' '}
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilsCss.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilsCss.headingLg}>
							<Link href="/">
								<a className={utilsCss.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={css.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
