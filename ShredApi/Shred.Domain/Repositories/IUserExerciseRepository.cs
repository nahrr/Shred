using Shred.Domain.Entities;

namespace Shred.Domain.Repositories;

public interface IUserExerciseRepository
{
    void Add(List<UserExercise> userExercise);
}
