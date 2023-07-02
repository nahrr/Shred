namespace Shred.Application.Workouts.Queries;

public sealed record WorkoutExerciseResponse(
    Guid Id,
    string Name,
    IReadOnlyCollection<SetResponse> Sets
    );
