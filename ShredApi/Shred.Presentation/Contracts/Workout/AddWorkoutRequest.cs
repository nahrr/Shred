namespace Shred.Presentation.Contracts.Workout;

public sealed record AddWorkoutRequest(
    string Name,
    bool IsCompleted,
    Guid UserId,
    List<AddExerciseRequest> Exercises);
