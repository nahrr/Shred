using MediatR;
using Shred.Domain.Entities;
using Shred.Domain.Shared;

namespace Shred.Application.Workouts.Queries;

public sealed record GetWorkoutByIdQuery(Guid Id) : IRequest<Result<WorkoutResponse>>;

