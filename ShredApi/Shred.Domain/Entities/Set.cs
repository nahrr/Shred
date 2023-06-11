namespace Shred.Domain.Entities;

public sealed class Set
{
    public Set(
        Guid id,
        int reps,
        decimal weight)
    {
        Id = id;
        Reps = reps;
        Weight = weight;
    }

    private Set() { }

    public Guid Id { get; private set; }
    public int Reps { get; private set; }
    public decimal Weight { get; private set; }

    public Guid UserExerciseId { get; private set; }
    public UserExercise UserExercise { get; private set; } = null!;
}
