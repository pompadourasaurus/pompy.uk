type Link = {
  href: string | URL
}

export const siteConfig = {
  name: "pompy.uk",
  url: "https://www.pompy.uk",
  themeColor: "#dc68e8",
  description: ["I'm pompy and you're probably cool if you're reading this, congrats"].join(" "),
  openGraphImage: "/assets/opengraph-image.png",
  links: {
    github: {
      href: "https://github.com/pompadourasaurus/pompy.uk",
    },
  } satisfies Record<string, Link>,
}

/**
 * the 'theme colour' `<meta>`-tag controls the background colour
 * used by the browser for regions outside bounds of page content.
 * @see useMetaColour
 */
export const metaThemeColours = {
  light: "#ffffff",
  dark: "#09090b",
}
