using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Comentario : ComentarioBase
    {

        public Comentario()
        {

        }

        public Comentario(int comentarioid, string descricao, DateTime data, int usuarioid, int pendenciaid) : base(comentarioid, descricao, data, usuarioid, pendenciaid)
        {
        }

        public class ComentarioFactory
        {
            public Comentario GetDefaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Comentario(data.ComentarioId,
                                        data.Descricao,
                                        data.Data,
                                        data.UsuarioId,
                                        data.PendenciaId);



				return construction;
            }

        }

        public bool IsValid()
        {
            base._validationResult = new ComentarioEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
