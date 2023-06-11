namespace Shred.Application.Workouts.Queries;

public sealed record WorkoutResponse(
    Guid Id,
    string Name,
    DateTimeOffset Date,
    bool IsCompleted,
    IReadOnlyCollection<ExerciseResponse> Exercises);
