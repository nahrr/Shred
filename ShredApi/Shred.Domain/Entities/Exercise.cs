namespace Shred.Domain.Entities;

public sealed class Exercise
{
    public Exercise(
       Guid id,
       string name,
       Guid muscleId,
       string instructions)
    {
        Id = id;
        Name = name;
        MuscleId = muscleId;
        Instructions = instructions;
    }

    // Parameterless constructor for Entity Framework
    private Exercise() { }

    public Guid Id { get; private set; }
    public string Name { get; private set; } = string.Empty;
    public Guid MuscleId { get; private set; }
    public string Instructions { get; private set; } = string.Empty;

    // Navigation properties
    public IReadOnlyCollection<UserExercise> UserExercises { get; private set; } = null!;

    public static Exercise Create(
        Guid id,
        string name,
        Guid muscleId,
        string instructions)
    {
        var exercise = new Exercise(
            id,
            name,
            muscleId,
            instructions);

        return exercise;
    }
}
