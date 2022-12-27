import {Doctor} from "./Doctor";

export interface Agenda {
  id: number;
  medico: Doctor;
  dia: string;
  horarios: string[]
}
