namespace Shred.Presentation.Contracts.Workout;

public sealed record AddSetRequest(
int Reps,
decimal Weight,
bool IsCompleted);

