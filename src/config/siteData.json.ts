export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Sabana Spaces",
	// Your website's title and description (meta fields)
	title: "Sabana Spaces - encuentra tu espacio ideal",
	description:
		"Las mejores historias comienzan con un cambio. Encuentra el tuyo en Sabana Spaces.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Steve Studios",
		email: "adri.hern118@gmail.com",
		twitter: "Steve_Studios",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
