import {createStore} from 'redux';

const reducer = (state=0, action) => {
  switch (action.type) {
    case 'INC': return state + 5;
    case 'DEC': return state - 5;
    case 'RND': return state + action.value;
    default: return state;
  }
}
// let act1 = {type: 'INC'};
// let act2 = {type: 'DEC'};
// let act3 = {type: 'RND'};

// let state = reducer(0, act1);
// console.log(state);
// state = reducer(state, act1);
// console.log(state);
// state = reducer(state, act2);
// console.log(state);
// state = reducer(state, act3);
// console.log(state);
// state = reducer(state, act3);
// console.log(state);
// state = reducer(state, act3);
// console.log(state);
// state = reducer(state, act3);
// console.log(state);
// console.log('------------------------------------');
// let newStore = createStore(reducer);
// newStore.subscribe(() => console.log(newStore.getState()))
// newStore.dispatch(act3);
// newStore.dispatch(act3);
// newStore.dispatch(act3);
// newStore.dispatch(act3);
// newStore.dispatch(act1);
// newStore.dispatch(act2);
// console.log(newStore);

const INC = document.querySelector('#inc');
const DEC = document.querySelector('#dec');
const RND = document.querySelector('#rnd');
const COUNTER = document.querySelector('#counter')

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (value) => ({type: 'RND', value: value})

let elseOneStore = createStore(reducer)
elseOneStore.subscribe(() => COUNTER.textContent = elseOneStore.getState())
INC.addEventListener('click', () => elseOneStore.dispatch(inc()))
DEC.addEventListener('click', () => elseOneStore.dispatch(dec()))
RND.addEventListener('click', () => {
  const value = Math.floor(Math.random()*10)*Math.pow(-1,Math.floor(Math.random()*10));
  elseOneStore.dispatch(rnd(value));
})