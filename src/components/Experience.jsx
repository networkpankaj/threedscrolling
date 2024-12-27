// import { OrbitControls } from "@react-three/drei";
// import { Office } from "./Office";
// // import { Overlay } from "./Overlay";

// export const Experience = () => {
//   return (
//     <>
//       <ambientLight intensity={1} />
//       <OrbitControls />
//       {/* <ScrollControls pages={3} damping={0.25}> */}
//         {/* <Overlay /> */}
//         <Office />
//       {/* </ScrollControls> */}
//     </>
//   );
// };

import React from 'react'
import Office from './Office'
import { OrbitControls } from '@react-three/drei'

const Experience = () => {
  return (
    <>
    <OrbitControls />
    <Office />
    </>
  )
}

export default Experience