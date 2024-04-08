import { hospede } from "./hospede";

export class reserva {
    uuid: string;
    hospede: hospede;
    dataEntrada: Date;
    dataSaida: Date;
    adicionalVeiculo: boolean;
    valorTotal: number;
}