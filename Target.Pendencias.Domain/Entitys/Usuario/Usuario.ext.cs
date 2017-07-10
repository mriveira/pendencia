using Target.Pendencias.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Target.Pendencias.Domain.Entitys
{
    public class Usuario : UsuarioBase
    {

        public Usuario()
        {

        }

        public Usuario(int usuarioid, string nome, string email, string senha, int usuariotipoid, bool ativo) :
            base(usuarioid, nome, email, senha, usuariotipoid, ativo)
        {

        }

		public class UsuarioFactory
        {
            public Usuario GetDefaaultInstance(dynamic data, CurrentUser user)
            {
                var construction = new Usuario(data.UsuarioId,
                                        data.Nome,
                                        data.Email,
                                        data.Senha,
                                        data.UsuarioTipoId,
                                        data.Ativo);


                if (user.IsTenant())
                    construction.SetarUsuarioDonoId(user.GetTenantOwnerId<int>());

                construction.SetarFoto(data.Foto);

                return construction;
            }

        }

        public virtual UsuarioTipo UsuarioTipo { get; protected set; }

        public bool IsValid()
        {
            base._validationResult = new UsuarioEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
