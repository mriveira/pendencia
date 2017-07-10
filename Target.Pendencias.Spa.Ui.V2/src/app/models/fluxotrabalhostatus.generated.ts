import { Dto } from '../common/models/dto';

export class FluxoTrabalhoStatusGenerated extends Dto {
    public fluxoTrabalhoStatusId: number;
    public nome: string;
    public fluxoTrabalhoTipoId: number;
    public corFundo: string;
    public corFonte: string;
    public ordem?: number;

}
