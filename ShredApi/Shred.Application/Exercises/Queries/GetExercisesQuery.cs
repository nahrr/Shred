using MediatR;
using Shred.Domain.Shared;

namespace Shred.Application.Exercises.Queries;

public sealed record GetExercisesQuery(int Take, int? Skip) : IRequest<Result<IEnumerable<ExerciseResponse>>>;

