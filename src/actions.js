export const inc = () => ({type: 'INC'})
export const dec = () => ({type: 'DEC'})
export const rnd = () => ({type: 'RND', value: Math.floor(Math.random()*10)*Math.pow(-1,Math.floor(Math.random()*10))})