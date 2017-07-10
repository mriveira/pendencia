import { Filter } from '../common/models/filter';

export class FluxoTrabalhoStatusGeneratedFilter extends Filter {
    public fluxoTrabalhoStatusId: number;
    public nome: string;
    public fluxoTrabalhoTipoId: number;
    public corFundo: string;
    public corFonte: string;
    public ordem?: number;

}
