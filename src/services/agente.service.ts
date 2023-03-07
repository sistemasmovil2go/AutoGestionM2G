import { Agente } from "../models/agente";

export async function getAgentes() {
  const agentes = await Agente.find({ where: { estatus: "A" } });

  return agentes;
}

export async function getAgenteById(numero: string) {
  const agente = await Agente.find({ where: { estatus: "A", number: numero } });

  return agente;
}
