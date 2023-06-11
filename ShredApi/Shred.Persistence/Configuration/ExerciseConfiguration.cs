using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class ExerciseConfiguration : IEntityTypeConfiguration<Exercise>
{
    public void Configure(EntityTypeBuilder<Exercise> builder)
    {
        builder.ToTable("Exercise");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .IsRequired()
            .HasMaxLength(150);

        builder.HasIndex(x => x.Name)
          .IsUnique();

        builder.HasOne<Muscle>()
                .WithMany()
                .HasForeignKey(x => x.MuscleId);
    }
}
