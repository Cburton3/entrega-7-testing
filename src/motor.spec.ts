import { vi } from "vitest";
import { partida } from "./modelo";
import { obtenerEstadoPartida } from "./motor";

describe("obtenerEstadoPartida", () => {
  it("El numero es mayor que 7.5", () => {
    //Arrange
    const estadoEsperado = "TE_HAS_PASADO";
    vi.spyOn(partida, "currentScore", "get").mockReturnValue(8);

    //Act
    const resultado = obtenerEstadoPartida();
    //Assert
    expect(resultado).toBe(estadoEsperado);
  });

  it("El numero es menor que 7.5", () => {
    //Arrange
    const estadoEsperado = "POR_DEBAJO_MAXIMO";
    vi.spyOn(partida, "currentScore", "get").mockReturnValue(7);

    //Act
    const resultado = obtenerEstadoPartida();
    //Assert
    expect(resultado).toBe(estadoEsperado);
  });

  it("El numero es igual a 7.5", () => {
    //Arrange
    const estadoEsperado = "JUSTO_MAXIMA";
    vi.spyOn(partida, "currentScore", "get").mockReturnValue(7.5);

    //Act
    const resultado = obtenerEstadoPartida();
    //Assert
    expect(resultado).toBe(estadoEsperado);
  });
});
