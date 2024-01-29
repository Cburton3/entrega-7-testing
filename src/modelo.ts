export const partida: Partida = {
  currentScore: 0,
  numeroDeIntentos: 0,
  estado: "POR_DEBAJO_MAXIMO",
};

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";

interface Partida {
  currentScore: number;
  numeroDeIntentos: number;
  estado: EstadoPartida;
}

export const setCurrentScore = (currentScore: number) => {
  partida.currentScore = currentScore;
};
