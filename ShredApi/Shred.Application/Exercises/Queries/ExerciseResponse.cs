namespace Shred.Application.Exercises.Queries
{
    public sealed record ExerciseResponse(Guid Id, string Name, string MuscleGroup, string ThumbnailUrl, string InstructionsUrl);
}
