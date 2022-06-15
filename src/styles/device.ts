const size = {
  mobileS: 576,
  mobileL: 768,
  tablet: 992,
  laptop: 1200,
  desktop: 2560
}

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  desktop: `(max-width: ${size.desktop}px)`
};
