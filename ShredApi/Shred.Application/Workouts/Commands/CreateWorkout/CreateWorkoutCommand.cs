using MediatR;
using Shred.Domain.Shared;

namespace Shred.Application.Workouts.Commands.CreateWorkout;

public sealed record CreateWorkoutCommand(
    string Name,
    bool IsCompleted,
    Guid UserId,
    List<CreateExerciseCommand> Exercises) : IRequest<Result<Guid>>;


public record CreateExerciseCommand(
    Guid Id,
    List<CreateSetCommand> Sets);

public record CreateSetCommand(
    int Reps,
    int Weight,
    Guid UserId,
    Guid ExerciseId);