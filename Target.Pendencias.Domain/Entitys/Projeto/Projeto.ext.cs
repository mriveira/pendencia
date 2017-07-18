using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;
using System.Collections;
using System.Collections.Generic;
using Common.Domain;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Target.Pendencias.Domain.Entitys
{
    public class Projeto : ProjetoBase
    {


        public Projeto()
        {

        }

        public Projeto(int projetoid, string nome, string descricao, int clienteid, int usuarioid, string chaveunica) : base(projetoid, nome, descricao, clienteid, usuarioid, chaveunica)
        {
        }

        public class ProjetoFactory
        {
            public Projeto GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var _usuarioId = user.GetTenantOwnerId<int>();

                var construction = new Projeto(data.ProjetoId,
                                        data.Nome,
                                        data.Descricao,
                                        data.ClienteId,
                                        _usuarioId, data.ChaveUnica);

                construction.SetarVisao(data.Visao);
                construction.SetarInicio(data.Inicio);
                construction.SetarFim(data.Fim);



                return construction;
            }

        }

        public virtual Usuario Usuario { get; protected set; }
        public virtual ICollection<Pendencia> CollectionPendencia { get; protected set; }


        public override void SetarInicio(DateTime? inicio)
        {
            this.Inicio = inicio.IsNotNull() ? inicio.Value.ToTimeZone() : inicio;
        }

        public override void SetarFim(DateTime? fim)
        {
            this.Fim = fim.IsNotNull() ? fim.Value.ToTimeZone() : fim;
        }

        public bool IsValid()
        {
            base._validationResult = new ProjetoEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

    }
}
