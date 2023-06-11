namespace Shred.Presentation.Contracts.Workout;

public sealed record AddExerciseRequest(
 Guid Id,
 string Name,
 bool IsCompleted,
 List<AddSetRequest> Sets);
