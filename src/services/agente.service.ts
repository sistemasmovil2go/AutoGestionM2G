import { Agente } from "../models/agente";

export async function getAgentes() {
  const agentes = await Agente.find({ where: { estatus: "A" } });

  return agentes;
}

export async function getAgenteByPuesto(puesto: string): Promise<Agente> {
  const agente = await Agente.find({ where: { estatus: "A", number: puesto } });

  return agente[0];
}
