namespace Shred.Domain.Entities
{
    public sealed class Muscle
    {
        public Muscle(
            Guid id,
            string name)
        {
            Id = id;
            Name = name;
        }

        private Muscle() { }

        public Guid Id { get; private set; }
        public string Name { get; private set; } = string.Empty;
    }
}