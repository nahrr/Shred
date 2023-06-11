namespace Shred.Domain.Entities;
public sealed class Workout
{
    public Workout(
        Guid id,
        string name,
        bool isCompleted,
        DateTimeOffset date,
        Guid userId)
    {
        Id = id;
        Name = name;
        IsCompleted = isCompleted;
        Date = date;
        UserId = userId;
    }

    private Workout() { }

    public Guid Id { get; private init; }
    public string Name { get; private set; } = null!;
    public bool IsCompleted { get; private set; }
    public DateTimeOffset Date { get; private set; }
    public Guid UserId { get; private set; }

    // Navigation properties
    public ICollection<UserExercise> UserExercises { get; set; } = null!;
    public User User { get; set; } = null!;

    public static Workout Create(
        Guid id,
        string name,
        bool isCompleted,
        DateTimeOffset date,
        Guid userId)
    {
        var workout = new Workout(
            id,
            name,
            isCompleted,
            date,
            userId);

        return workout;
    }
}