namespace Shred.Domain.Entities;

public sealed class Exercise
{
    public Exercise(
       Guid id,
       string name,
       Guid muscleGroupId,
       string mediaPath,
       bool hasVideo)
    {
        Id = id;
        Name = name;
        MuscleGroupId = muscleGroupId;
        MediaPath = mediaPath;
        HasVideo = hasVideo;
    }

    // Parameterless constructor for Entity Framework
    private Exercise() { }

    public Guid Id { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public Guid MuscleGroupId { get; private set; }
    public string MediaPath { get; private set; } = string.Empty;
    public bool HasVideo { get; private set; }


    // Navigation properties
    public IReadOnlyCollection<UserExercise> UserExercises { get; private set; } = null!;

    public MuscleGroup MuscleGroup { get; private set; } = null!;
}
