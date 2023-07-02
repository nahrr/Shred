using Shred.Domain.Entities;
using Shred.Domain.Repositories;

namespace Shred.Persistence.Repositories;

public sealed class UserExerciseRepository : IUserExerciseRepository
{
    private readonly ApplicationDbContext _context;

    public UserExerciseRepository(ApplicationDbContext context) => _context = context;

    public void Add(List<UserExercise> userExercise) => _context.Add(userExercise);
}
