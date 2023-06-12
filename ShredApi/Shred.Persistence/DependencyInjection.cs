using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Shred.Domain.Repositories;
using Shred.Persistence.Repositories;

namespace Shred.Persistence;

public static class DependencyInjection
{
    public static IServiceCollection AddPersistence(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        //TODO: fix cs
        services.AddDbContext<ApplicationDbContext>(options => {
            options.UseSqlServer(configuration["DatabaseConnectionString"]);
        });

        services.AddScoped<IUnitOfWork>(sp => sp.GetRequiredService<ApplicationDbContext>());

        services.AddScoped<IWorkoutRepository, WorkoutRepository>();

        services.AddScoped<IExerciseRepository, ExerciseRepository>();

        return services;
    }
}
