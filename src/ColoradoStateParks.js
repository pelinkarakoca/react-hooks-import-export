//import react from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde"
import { trees, wildlife, elevation } from "./parks/RockyMountain";

function ColoradoStateParks() {
  console.log(trees);
  console.log(wildlife());
  console.log(elevation());
  console.log(howManyParks()); // => "42 parks!"
  return (
    <div>
      <MesaVerde />
    </div>
  )
}

export default ColoradoStateParks;
