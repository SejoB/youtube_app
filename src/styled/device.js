const size = {
   mobile:  '430px',
   tablet:  '680px',
   tabletL: '880px',
   laptop:  '1080px',
 }
 export const deviceMin = Object.keys(size).reduce((acc, key) => {
   acc[key] = style => `
     @media (min-width: ${size[key]}) {
       ${style};
     }
   `
   return acc
 }, {})
 export const deviceMax = Object.keys(size).reduce((acc, key) => {
   acc[key] = style => `
     @media (max-width: ${size[key]}) {
       ${style};
     }
   `
   return acc
 }, {})
// // ${device.tablet`
// //     flex-direction: row;
// //   `};
 
// export const device = {
//    mobile: `(min-width: ${size.mobileS})`,
//    tablet: `(min-width: ${size.tablet})`,
//    tabletL: `(min-width: ${size.laptop})`,
//    laptop: `(min-width: ${size.laptopL})`,
//  };

// //  @media ${device.laptop} {
// //   flex-direction: row;
// // }
 


