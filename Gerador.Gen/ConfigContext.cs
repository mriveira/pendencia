using Common.Gen;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cna.Erp.Gen
{
    public class ConfigContext
    {
        #region Config Contexts

        private Context ConfigContextTargetPendencia()
        {
            var contextName = "Target";

            return new Context
            {

                ConnectionString = ConfigurationManager.ConnectionStrings["Target"].ConnectionString,

                Namespace = "Target.Pendencias",
                ContextName = "Target",
                ShowKeysInFront = true,
                LengthBigField = 250,

                OutputClassDomain = ConfigurationManager.AppSettings[string.Format("outputClassDomain{0}", contextName)],
                OutputClassInfra = ConfigurationManager.AppSettings[string.Format("outputClassInfra{0}", contextName)],
                OutputClassDto = ConfigurationManager.AppSettings[string.Format("outputClassDto{0}", contextName)],
                OutputClassApp = ConfigurationManager.AppSettings[string.Format("outputClassApp{0}", contextName)],
                OutputClassApi = ConfigurationManager.AppSettings[string.Format("outputClassApi{0}", contextName)],
                OutputClassFilter = ConfigurationManager.AppSettings[string.Format("outputClassFilter{0}", contextName)],
                OutputClassSummary = ConfigurationManager.AppSettings[string.Format("outputClassSummary{0}", contextName)],
                OutputAngular = ConfigurationManager.AppSettings["OutputAngular"],
                OutputClassSso = ConfigurationManager.AppSettings["OutputClassSso"],

                Arquiteture = ArquitetureType.DDD,
                CamelCasing = true,
                MakeFront = true,

                TableInfo = new UniqueListTableInfo
                {

                    new TableInfo { TableName = "Acompanhadores", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "Cliente", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true,
                    FieldsConfig = new List<FieldConfig>
                    {
                            new FieldConfig()
                            {
                                Name ="EmailDeContato",
                                Email = true
                            },
                            new FieldConfig()
                            {
                                Name ="usuarioId", Edit = false, Create = false , Filter=  false,
                            },

                        }
                    },
                    new TableInfo { TableName = "Comentario", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "ComentarioDocumento", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "Documento", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "FluxoTrabalhoStatus", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "FluxoTrabalhoTipo", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "PendeciaPrioridade", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "PendenciaEventos", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true },
                    new TableInfo { TableName = "Pendencia", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true,
                    FieldsConfig = new List<FieldConfig>
                    {
                            new FieldConfig {  Name ="projetoId" , Order=-1, SelectSearch=true},
                            new FieldConfig()
                            {
                                Name ="usuarioId", Edit = false, Create = false , Filter=  false,
                            },
                             new FieldConfig()
                            {
                                Name ="DataConclusao", Edit = false, Create = false , Filter=  false,
                            },
                            new FieldConfig()
                            {
                                Name ="Descricao",
                                TextEditor = true
                            },
                            new FieldConfig()
                            {
                                Name ="pontosEstimados" ,
                                DataItem = new Dictionary<string, string> {
                                    { "0" ,"0 Pontos"},
                                    { "1" ,"1 Ponto"},
                                    { "2" ,"2 Pontos"},
                                    { "3" ,"3 Pontos"},
                                    { "5" ,"5 Pontos"},
                                    { "8" ,"8 Pontos"},
                                    { "13" ,"13 Pontos"},
                                    { "20" ,"20 Pontos"},
                                    { "40" ,"40 Pontos"},
                                    { "100" ,"100 Pontos"},
                                },
                            }.init(TypeCtrl.Radio),

                        }
                    },
                    new TableInfo { TableName = "PendenciaDocumento", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "PendenciaTipo", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "Projeto", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true,
                    FieldsConfig = new List<FieldConfig>
                    {
                            new FieldConfig()
                            {
                                Name ="usuarioId", Edit = false, Create = false , Filter=  false,
                            },
                            new FieldConfig()
                            {
                                Name ="ativo",  Create = false
                            }
                        }
                    },
                    new TableInfo { TableName = "ProjetoFluxoTrabalhoStatus", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "PendenciaTempos", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
                    new TableInfo { TableName = "Usuario", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true,
                    FieldsConfig = new List<FieldConfig>
                    {
                            new FieldConfig()
                            {
                                Name ="Senha",
                                PasswordConfirmation = true
                            },
                            new FieldConfig()
                            {
                                Name ="Email",
                                Email = true
                            },
                            new FieldConfig()
                            {
                                Name ="foto",
                                upload = true,
                                List = false,
                            },
                            new FieldConfig()
                            {
                                Name ="usuarioDonoId", Edit = false, Create = false , Filter=  false, List = false,
                            }
                        }
                    },
                    new TableInfo { TableName = "UsuarioTipo", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},


                }
            };
        }



        public IEnumerable<Context> GetConfigContext()
        {

            return new List<Context>
            {

                ConfigContextTargetPendencia(),

            };

        }

        #endregion
    }
}