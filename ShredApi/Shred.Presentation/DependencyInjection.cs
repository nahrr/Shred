using Microsoft.Extensions.DependencyInjection;

namespace Shred.Presentation;

public static class DependencyInjection
{
    public static IServiceCollection AddPresentation(
      this IServiceCollection services)
    {
        services
        .AddControllers()
        .AddApplicationPart(AssemblyReference.Assembly);

        services.AddEndpointsApiExplorer();

        services.AddSwaggerGen();

        return services;
    }
}
