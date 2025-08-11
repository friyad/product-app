// src/hooks/useDebounce.js
// export default function useDebounce(fn, delay = 300) {
//   let timeoutId;

//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }
