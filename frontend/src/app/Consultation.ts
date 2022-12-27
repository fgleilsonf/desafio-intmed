import {Doctor} from "./Doctor";

export interface Consultation {
  id: number;
  medico: Doctor;
  dia: string;
  horario: string
}
