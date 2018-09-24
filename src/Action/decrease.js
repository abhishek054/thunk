import axios from "axios";

//Using Thunk
//All logic in action creator

// const decrease = data => {
//   return dispatch => {
//     setTimeout(() => {
//       axios.get(`http://localhost:4200/videoComments/CBZpMuFBj5s`).then(res => {
//         console.log("using thunk");
//         console.log("data received", res);
//         dispatch({
//           type: "decrease",
//           payload: data
//         });
//       });
//     }, 3000);
//   };
// };

//Normal and using Sage

const decrease = data => {
  return {
    type: "decrease",
    payload: data
  };
};

export default decrease;
