import {Specialty} from "./Specialty";

export interface Doctor {
  id: number;
  crm: number,
  nome: string;
  especialidade: Specialty
}
