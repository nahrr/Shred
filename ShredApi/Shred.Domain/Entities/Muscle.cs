namespace Shred.Domain.Entities
{
    public sealed class MuscleGroup
    {
        public MuscleGroup(
            Guid id,
            string name)
        {
            Id = id;
            Name = name;
        }

        private MuscleGroup() { }

        public Guid Id { get; private set; }
        public string Name { get; private set; } = string.Empty;

        public IReadOnlyCollection<Exercise> Exercises { get; set; } = null!;
    }
}