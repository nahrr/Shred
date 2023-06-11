using Microsoft.EntityFrameworkCore;
using Shred.Domain.Entities;
using Shred.Domain.Repositories;

namespace Shred.Persistence.Repositories;

public sealed class WorkoutRepository : IWorkoutRepository
{
    private readonly ApplicationDbContext _context;

    public WorkoutRepository(ApplicationDbContext context) =>
        _context = context;

    public async Task<Workout?> GetByIdAsync(
        Guid id,
        CancellationToken cancellationToken = default)
    {
        return await _context.Workouts
            .Include(w => w.UserExercises)
                .ThenInclude(ue => ue.Exercise)
            .Include(w => w.UserExercises)
                .ThenInclude(ue => ue.Sets)
            .FirstOrDefaultAsync(w => w.Id == id, cancellationToken);
    }

    public void Add(Workout workout) => _context.Set<Workout>().Add(workout);

    public void Remove(Workout workout) =>
        _context.Remove(workout);

}
