using Shred.Domain.Entities;

namespace Shred.Domain.Repositories;

public interface IWorkoutRepository
{
    Task<Workout?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    void Add(Workout workout);
    void Remove(Workout workout);
}