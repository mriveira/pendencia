using AutoMapper;

namespace Target.Pendencias.Application.Config
{
	public class AutoMapperConfigTarget
    {
		public static void RegisterMappings()
		{

			Mapper.Initialize(x =>
			{
				x.AddProfile<DominioToDtoProfileTarget>();
				x.AddProfile<DominioToDtoProfileTargetCustom>();
			});

		}
	}
}
