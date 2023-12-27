import { Mail, Github, Facebook, Youtube, Twitter } from "./icons";

const components = {
	mail: Mail,
	github: Github,
	facebook: Facebook,
	youtube: Youtube,
	twitter: Twitter,
};

type SocialIconProps = {
	kind: keyof typeof components;
	href: string | undefined;
	size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
	if (
		!href ||
		(kind === "mail" &&
			!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
	)
		return null;

	const SocialSvg = components[kind];

	return (
		<a className="" target="_blank" rel="noopener noreferrer" href={href}>
			<span className="sr-only">{kind}</span>
			<SocialSvg
				className={`bg-zinc-900 p-1 rounded-sm fill-white w-${size} md:w-${
					size + 1
				}`}
			/>
		</a>
	);
};

export default SocialIcon;
