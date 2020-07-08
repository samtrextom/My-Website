// import React from 'react'

// const [current, setCurrent]=React.useState(0)

// const [state, dispatch] = useReducer(carouselReducer, initialCarouselState)

// const initialCarouselState = {
//     offset: 0,
//     desired: 0,
//     active: 0
//     }

// const handlers = useSwipeable({
//     onSwiping(e) {
//         dispatch({
//         type: "drag",
//         offset: -e.deltaX
//         })
//     },
//     onSwipedLeft(e) {
//         const t = threshold(e.event.target)
    
//         if (e.deltaX >= t) {
//         dispatch({
//             type: "next",
//             length
//         })
//         } else {
//         dispatch({
//             type: "drag",
//             offset: 0
//         })
//         }
//     },
//     onSwipedRight(e) {
//         const t = threshold(e.event.target)
    
//         if (-e.deltaX >= t) {
//         dispatch({
//             type: "prev",
//             length
//         })
//         } else {
//         dispatch({
//             type: "drag",
//             offset: 0
//         })
//         }
//     },
//     trackMouse: true,
//     trackTouch: true
// })

// React.useEffect(() => {
//     const next = (current + 1) % slides.length
//     const id = setTimeout(() => setCurrent(next), time)
//     return () => clearTimeout(id)
//   }, [current])

// React.useEffect(() => {
//     const id = setTimeout(() => dispatch({ type: "next", length }), interval);
//     return () => clearTimeout(id);
// }, [state.offset, state.active]);

// React.useEffect(() => {
//     const id = setTimeout(() => dispatch({ type: "done" }), transitionTime);
//     return () => clearTimeout(id);
// }, [state.desired]);

// function carouselReducer(state, action) {
//     switch (action.type) {
//         case "jump":
//             return {
//                 ...state,
//                 desired: action.desired
//             }
//         case "next":
//             return {
//                 ...state,
//                 desired: next(action.length, state.active)
//             }
//         case "prev":
//             return {
//                 ...state,
//                 desired: previous(action.length, state.active)
//             }
//         case "done":
//             return {
//                 ...state,
//                 offset: NaN,
//                 active: state.desired
//             }
//         case "drag":
//             return {
//                 ...state,
//                 offset: action.offset
//             }
//         default:
//             return state;
//     }
// }

// const PortfolioCarousel = ({ slides, interval = 5000 })=>{

//     const length = slides.length;

//     const [active, setActive, handlers, style] = useCarousel(length, interval);

    

    

//     return(length > 0 && (
//         <div className="carousel">
//           <ol className="carousel-indicators">
//             {slides.map((_, index) => (
//               <li
//                 onClick={() => setActive(index)}
//                 key={index}
//                 className={`${active === index ? "active" : ""}`}
//               />
//             ))}
//           </ol>
//           <div className="carousel-content" {...handlers} style={style}>
//             <div className="carousel-item">{slides[slides.length - 1]}</div>
//             {slides.map((slide, index) => (
//               <div className="carousel-item" key={index}>
//                 {slide.slideText}
//               </div>
//             ))}
//             <div className="carousel-item">{slides[0]}</div>
//           </div>
//         </div>
//       ))
// }

// export default PortfolioCarousel