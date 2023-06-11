namespace Shred.Domain.Entities;

public sealed class UserExercise
{
    public UserExercise(
        Guid id,
        Guid exerciseId,
        Guid userId,
        Guid workoutId,
        bool isCompleted,
        ICollection<Set> sets)
    {
        Id = id;
        ExerciseId = exerciseId;
        UserId = userId;
        WorkoutId = workoutId;
        IsCompleted = isCompleted;
        Sets = sets;
    }

    private UserExercise() { }

    public Guid Id { get; private set; }
    public Guid UserId { get; private set; }
    public Guid ExerciseId { get; set; }
    public Guid WorkoutId { get; set; }
    public bool IsCompleted { get; private set; }
    public User User { get; set; } = null!;
    public Exercise Exercise { get; set; } = null!;
    public Workout Workout { get; set; } = null!;
    public ICollection<Set> Sets { get; set; } = null!;
}
