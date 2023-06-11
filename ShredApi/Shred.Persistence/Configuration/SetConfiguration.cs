using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class SetConfiguration : IEntityTypeConfiguration<Set>
{
    public void Configure(EntityTypeBuilder<Set> builder)
    {
        builder.ToTable("Set");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Reps)
            .IsRequired();

        builder.Property(x => x.Weight)
            .IsRequired();

        builder.HasOne(s => s.UserExercise)
            .WithMany(ue => ue.Sets)
            .HasForeignKey(s => s.UserExerciseId)
            .IsRequired();
    }
}
