using MediatR;
using Shred.Domain.Shared;

namespace Shred.Application.Exercises.Queries;

public sealed record GetExercisesQuery() : IRequest<Result<IEnumerable<ExerciseResponse>>>;

