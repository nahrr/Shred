﻿using Microsoft.EntityFrameworkCore;
using Shred.Domain.Entities;
using Shred.Domain.Repositories;

namespace Shred.Persistence.Repositories;

public sealed class ExerciseRepository : IExerciseRepository
{
    private readonly ApplicationDbContext _context;

    public ExerciseRepository(ApplicationDbContext context) => _context = context;

    public void Add(List<UserExercise> userExercise)
    {
        _context.AddRange(userExercise);
    }

    public async Task<Exercise?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        return await _context.Exercises.FindAsync(id, cancellationToken);
    }

    public async Task<List<Guid>> GetExistingExerciseIdsAsync(List<Guid> exerciseIds, CancellationToken cancellationToken = default)
    {
        return await _context.Exercises
                             .Where(x => exerciseIds.Contains(x.Id))
                             .Select(x => x.Id)
                             .ToListAsync(cancellationToken);
    }
}
