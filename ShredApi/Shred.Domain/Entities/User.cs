namespace Shred.Domain.Entities;

public sealed class User 
{
    public Guid Id { get; set; }

    public ICollection<Workout>? Workouts { get; private set; }

    public IReadOnlyCollection<UserExercise> UserExercises { get; private set; } = null!;
}
