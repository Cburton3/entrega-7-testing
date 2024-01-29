// export let currentScore = 0;
export const partida: Partida = {
  currentScore: 0,
  numeroDeIntentos: 0,
  estado: "POR_DEBAJO_MAXIMO",
  // estado: "JUSTO_MAXIMA", //to see where these are commented out, please look at last fx in motor.ts. its neccessary for it all to work.
  // estado: "TE_HAS_PASADO",
};

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO"; 

interface Partida {
  currentScore: number;
  numeroDeIntentos: number;
  estado: EstadoPartida;
} //defines what is, like a plan of a house

export const setCurrentScore = (currentScore: number) => {
  partida.currentScore = currentScore;
};


