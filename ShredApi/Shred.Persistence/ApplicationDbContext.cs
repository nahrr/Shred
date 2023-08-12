using Microsoft.EntityFrameworkCore;
using Shred.Domain.Entities;
using Shred.Domain.Repositories;

namespace Shred.Persistence;
public sealed class ApplicationDbContext : DbContext, IUnitOfWork
{
    public ApplicationDbContext()
    {
    }

    public ApplicationDbContext(DbContextOptions options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }

    async Task IUnitOfWork.SaveChangesAsync(CancellationToken cancellationToken)
    {
        await SaveChangesAsync(cancellationToken);
    }

    public DbSet<Workout> Workouts { get; set; }
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Set> Sets { get; set; }
    public DbSet<MuscleGroup> MuscleGroups { get; set; }
}
