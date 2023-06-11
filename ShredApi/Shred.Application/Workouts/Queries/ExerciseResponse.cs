namespace Shred.Application.Workouts.Queries;

public sealed record ExerciseResponse(
    Guid Id,
    string Name,
    IReadOnlyCollection<SetResponse> Sets
    );
