using Shred.Domain.Entities;

namespace Shred.Domain.Repositories;

public interface IExerciseRepository
{
    Task<Exercise?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    Task<List<Guid>> GetExistingExerciseIdsAsync(List<Guid> exerciseIds, CancellationToken cancellationToken = default);
    void Add(List<UserExercise> userExercise);
    Task<IEnumerable<Exercise>> GetExercisesAsync(int take, int? skip, CancellationToken cancellationToken = default);
}
