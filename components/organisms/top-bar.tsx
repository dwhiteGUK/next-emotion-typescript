import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'

import { Icon } from '@/atoms/icon'
import { Container } from '@/atoms/container'

const data = {"id":1,"published_at":"2021-11-24T13:23:59.906Z","created_at":"2021-11-24T11:47:20.615Z","updated_at":"2021-12-15T14:52:55.378Z","NavbarFooter":[{"id":1,"label":"Casinos","url":null,"MenuItems":[{"id":1,"label":"Casinos","url":"/casino-locator","link":[]},{"id":2,"label":"Casino Gaming","url":"/casino-gaming","link":[]},{"id":3,"label":"Online Gaming","url":"/online-gaming","link":[]},{"id":4,"label":"Entertainment","url":"/entertainment","link":[]},{"id":5,"label":"What's On","url":"/whats-on","link":[]},{"id":6,"label":"Members","url":"/members","link":[]},{"id":7,"label":"Corporate","url":"/corporate","link":[]},{"id":8,"label":"Careers","url":"/careers","link":[]}]},{"id":2,"label":"About","url":null,"MenuItems":[{"id":9,"label":"About","url":"/about-genting-uk","link":[]},{"id":10,"label":"Contact","url":"/contact","link":[]},{"id":11,"label":"Help","url":"/help","link":[]},{"id":12,"label":"Responsible Gaming","url":"/responsible-gaming","link":[]},{"id":13,"label":"Social Responsibility","url":"/social-responsibility","link":[]},{"id":14,"label":"Accessibility","url":"/accessibility","link":[]},{"id":15,"label":"Terms & Conditions","url":"/terms-and-conditions","link":[]},{"id":16,"label":"Privacy Policy","url":"/privacy-policy","link":[]}]},{"id":3,"label":"Terms & Conditions","url":null,"MenuItems":[{"id":17,"label":"Genting Rewards T&Cs","url":"/genting-rewards-terms","link":[]},{"id":18,"label":"Cookies","url":"/cookies","link":[]},{"id":19,"label":"Affiliates","url":"/affiliates","link":[]},{"id":20,"label":"News","url":"/news","link":[]},{"id":21,"label":"Press","url":"/press","link":[]}]}],"NavbarTop":[{"id":4,"label":"Casinos","url":null,"MenuItems":[{"id":22,"label":"Casino Locator","url":"/casinos","link":[]},{"id":23,"label":"London Casinos","url":"","link":[{"id":1,"label":"Crockfords","url":"https://crockfords.com"},{"id":2,"label":"Forty Five Kensington","url":"https://fortyfivekensington.co.uk"},{"id":3,"label":"The Colony Club","url":"https://thecolonyclub.co.uk"},{"id":4,"label":"The Palm Beach","url":"https://thepalmbeach.co.uk"}]},{"id":24,"label":"Featured Content","url":null,"link":[{"id":5,"label":"What's On","url":"/whats-on"},{"id":7,"label":"Jackpots","url":"/jackpots"},{"id":8,"label":"My Genting App","url":"/my-genting-app"}]}]},{"id":5,"label":"Casino Gaming","url":null,"MenuItems":[{"id":25,"label":"Three Card Poker","url":"/three-card-poker","link":[]},{"id":26,"label":"Slots","url":"/casino-gaming/slots-jackpots","link":[]},{"id":27,"label":"Jackpots","url":"/casino-gaming/slots-jackpots","link":[]},{"id":28,"label":"Roulette","url":"/casino-gaming/roulette","link":[]},{"id":29,"label":"Baccarat","url":"/casino-gaming/baccarat","link":[]},{"id":30,"label":"Blackjack","url":"/casino-gaming/blackjack","link":[]},{"id":32,"label":"E-Tables","url":"/casino-gaming/e-tables","link":[]},{"id":33,"label":"Mahjong","url":"/casino-gaming/mah-jong","link":[]}]},{"id":6,"label":"Online Gaming","url":"","MenuItems":[{"id":41,"label":"Online Benefits ","url":"/gentingbet-benefits","link":[]}]},{"id":7,"label":"Entertainment","url":"","MenuItems":[{"id":42,"label":"Resorts World Birmingham","url":"/entertainment#resorts-world-birmingham","link":[]},{"id":43,"label":"Private Hire","url":"/entertainment#corporate-events-&-private-hire","link":[]},{"id":44,"label":"Global Sites","url":"/entertainment#global-site","link":[]}]},{"id":8,"label":"What's On","url":"#","MenuItems":[{"id":45,"label":"Events","url":"#","link":[]}]},{"id":9,"label":"Members","url":"https://register.gentingcasinos.co.uk/","MenuItems":[{"id":49,"label":"Member Information / Sign-up","url":"/members","link":[]},{"id":51,"label":"Contact Us","url":"#","link":[]},{"id":52,"label":"Social Links","url":"#","link":[]},{"id":53,"label":"Mobile Apps","url":"#","link":[]}]},{"id":10,"label":"Corporate","url":null,"MenuItems":[{"id":54,"label":"About","url":"/about-genting-uk","link":[]},{"id":55,"label":"Heritage","url":"/about-genting-uk#heritage","link":[]},{"id":56,"label":"Team","url":"/senior-management-team","link":[]},{"id":57,"label":"Corporate Responsibility","url":"/about-genting-uk#corporate-social-responsibility","link":[]},{"id":58,"label":"Press","url":"/media-enquiries","link":[]},{"id":59,"label":"News","url":"/news","link":[]}]},{"id":11,"label":"Careers","url":"","MenuItems":[{"id":60,"label":"Recruitment","url":"/careers","link":[]},{"id":61,"label":"Vacancies","url":"/careers#vacancies","link":[]},{"id":62,"label":"Video Content","url":"#","link":[]},{"id":63,"label":"COTY","url":"#","link":[]}]},{"id":12,"label":"Responsible Gambling","url":null,"MenuItems":[{"id":64,"label":"Our Commitement","url":"/responsible-gambling#our-commitment","link":[]},{"id":65,"label":"General Information","url":"/responsible-gambling#general-information","link":[]},{"id":66,"label":"What's Gambling","url":"/responsible-gambling#whats-gambling","link":[]},{"id":67,"label":"Gambling Safety","url":"/responsible-gambling#gambling-safety","link":[]}]}],"NavBarGlobal":[{"id":10,"label":"Help","url":"#"},{"id":11,"label":"About","url":"/about-genting-uk"},{"id":12,"label":"Contact","url":"#"}]}

/**
 * Desktop top bar with clock, search and navigation links
 */
function TopBar() {
	const [time, setTime] = useState(new Date())


	useEffect(() => {
		const ticker = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(ticker)
		}
	}, [])

	return (
		<div className='hidden lg:block py-3 bg-theme-accent w-full'>
			<Container tw='flex justify-between text-xs'>
				<div className='flex' data-testid='topbar-clock'>
					<Icon variant='outline' icon='clock' tw='w-4 h-4 mr-2' /> 
					<span suppressHydrationWarning>
						{time.toLocaleTimeString('en-GB', {
							hour: '2-digit',
							minute: '2-digit',
						})}
					</span>
				</div>

				<div className='flex'>
					<nav>
						{data?.NavBarGlobal && (
							<ul className='flex uppercase space-x-4 lg:space-x-6'>
								{data.NavBarGlobal.map(
									/* @ts-ignore */
									({ id, label, url }: { id: string; label: string; url: string }) => (
										<li key={id}>
											<Link href={url}>{label}</Link>
										</li>
									)
								)}
							</ul>
						)}
					</nav>
				</div>
			</Container>
		</div>
	)
}

export { TopBar }
