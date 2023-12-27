import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/icons/social-icons";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import Logo from "./icons/logo";

export default function Footer() {
	return (
		<footer className="bg-neutral-950/80 p-10 mt-4">
			<div className="flex justify-between flex-col-reverse lg:flex-row gap-6 text-gray-400 ">
				<div className="flex flex-col md:flex-row lg:flex-col gap-y-2 justify-between ">
					<div className="flex gap-x-3 flex-col md:flex-row md:items-start items-center text-center md:text-start">
						<Logo className="w-20 h-20" />
						<div className="space-y-1 text-[.8rem] md:text-xs">
							<div className="uppercase  md:text-lg font-semibold ">
								{siteMetadata.title}
							</div>
							<div className=" ">{`© ${
								siteMetadata.title
							} ${new Date().getFullYear()}.`}</div>
							<div> All rights reserved</div>

							<div className="dark:text-gray-400 flex gap-x-4 ">
								<div>Terms & Conditions</div>
								<div>Privacy Policy</div>
							</div>
						</div>
					</div>
					<div className=" flex space-x-4 self-center md:self-start">
						<SocialIcon
							kind="mail"
							href={`mailto:${siteMetadata.email}`}
							size={6}
						/>
						<SocialIcon
							kind="github"
							href={siteMetadata.github}
							size={6}
						/>
						<SocialIcon
							kind="twitter"
							href={siteMetadata.twitter}
							size={6}
						/>
					</div>
				</div>
				<div>
					<nav className="flex gap-x-4 gap-y-4 flex-col md:flex-row">
						{headerNavLinks.map((link) => (
							<Link
								key={link.title}
								href={link.href}
								className=" text-sm"
							>
								{link.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
