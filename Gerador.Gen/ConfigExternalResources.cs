using Common.Gen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Target.Pendencias.Gen
{
    public class ConfigExternalResources
    {

        private ExternalResource ConfigExternarResourcesTemplatesFrontAngularJs(bool replaceLocalFilesApplication) {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = replaceLocalFilesApplication,
                ResouceRepositoryName = "template-gerador-front-angularJS",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/template-gerador-front-angularJS.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Gerador.Gen\Templates\Front",
            };

        }

        private ExternalResource ConfigExternarResourcesTemplatesFrontAngular(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = replaceLocalFilesApplication,
                ResouceRepositoryName = "template-gerador-front-angular",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/template-gerador-front-angular.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Gerador.Gen\Templates\FrontV2",
            };

        }

        private ExternalResource ConfigExternarResourcesTemplatesBackDDD(bool replaceLocalFilesApplication) 
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                ResouceRepositoryName = "template-gerador-back-DDD",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/template-gerador-back-DDD.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Gerador.Gen\Templates\Back"
            };

        }

        private ExternalResource ConfigExternarResourcesFrameworkAngulaJsCrud(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                ResouceRepositoryName = "framework-angularJS-CRUD",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/framework-angularJS-CRUD.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Target.Pendencias.Spa.Ui\js\common"
            };

        }

        private ExternalResource ConfigExternarResourcesFrameworkAngulaCrud(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                ResouceRepositoryName = "framework-angular-CRUD",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/framework-angular-CRUD.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Target.Pendencias.Spa.Ui.V2\src\app\common"
            };

        }

        private ExternalResource ConfigExternarResourcesFrameworkCommon(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                OnlyFoldersContainsThisName = "Common",
                ResouceRepositoryName = "framework-core-common",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/framework-core-common.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias"
            };

        }

        private ExternalResource ConfigExternarResourcesSeedLayoutBs3AngularJs(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                DownloadOneTime = true,
                ResouceRepositoryName = "Seed-layout-front",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/seed-layout-front.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Target.Pendencias.Spa.Ui"
            };

        }

        private ExternalResource ConfigExternarResourcesSeedLayoutBs3Angular(bool replaceLocalFilesApplication)
        {

            return new ExternalResource
            {
                ReplaceLocalFilesApplication = true,
                DownloadOneTime = true,
                ResouceRepositoryName = "Seed-layout-front-angular",
                ResourceUrlRepository = "https://github.com/wilsonsantosnet/Seed-layout-front-angular.git",
                ResourceLocalPathFolderExecuteCloning = @"C:\Projetos\Outros\Repositorios",
                ResourceLocalPathDestinationFolrderApplication = @"C:\Projetos\Target.Pendencias\Target.Pendencias.Spa.Ui.V2"
            };

        }

        public IEnumerable<ExternalResource> GetConfigExternarReources()
        {
            var replaceLocalFilesApplication = true;

            return new List<ExternalResource>
            {
               ConfigExternarResourcesTemplatesFrontAngular(replaceLocalFilesApplication),
               //ConfigExternarResourcesTemplatesFrontAngularJs(replaceLocalFilesApplication),
               //ConfigExternarResourcesTemplatesBackDDD(replaceLocalFilesApplication),
               //ConfigExternarResourcesFrameworkAngulaJsCrud(replaceLocalFilesApplication),
               ConfigExternarResourcesFrameworkAngulaCrud(replaceLocalFilesApplication),
               //ConfigExternarResourcesFrameworkCommon(replaceLocalFilesApplication),
               //ConfigExternarResourcesSeedLayoutBs3AngularJs(replaceLocalFilesApplication)
               ConfigExternarResourcesSeedLayoutBs3Angular(replaceLocalFilesApplication)

            };

        }


    }
}
