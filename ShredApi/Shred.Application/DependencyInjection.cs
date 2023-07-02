using Microsoft.Extensions.DependencyInjection;
using Shred.Application.Services;
using Shred.Domain.Repositories;

namespace Shred.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(cfg =>
        {
            cfg.RegisterServicesFromAssembly(typeof(AssemblyReference).Assembly);
        });

        services.AddScoped<IExerciseMediaUrlService, ExerciseMediaUrlService>();

        return services;
    }
}
