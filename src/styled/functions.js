export const flexbox = ( {d='row',j='center',a='center'} = {} )=>`
    display:flex;
    flex-direction:${d};
    justify-content:${j};
    align-items:${a};     
`;

//  export const checkWidth = (callback) =>{
// if (matchMedia) {
//     const mq = window.matchMedia('(max-width: 600px)');
//     mq.addListener(callback);
//     callback(mq);
//     }
// }

// var mql = window.matchMedia('(max-width: 600px)');

// function screenTest() {
//   if (mql.matches) {
//     /* the viewport is 600 pixels wide or less */
//     console.log('yes')
//   } else {
//     /* the viewport is more than than 600 pixels wide */
//     console.log('no')
    
//   }
// }

// mql.addListener(screenTest);