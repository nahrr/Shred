using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class WorkoutConfiguration : IEntityTypeConfiguration<Workout>
{
    public void Configure(EntityTypeBuilder<Workout> builder)
    {
        builder.ToTable("Workout");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
           .IsRequired()
           .HasMaxLength(150);

        builder.Property(x => x.IsCompleted)
            .IsRequired();

        builder.Property(x => x.Date)
            .IsRequired();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.HasOne(x => x.User)
           .WithMany(u => u.Workouts)
           .HasForeignKey(x => x.UserId);

        builder.HasMany(x => x.UserExercises)
               .WithOne(ue => ue.Workout)
               .HasForeignKey(ue => ue.WorkoutId);
    }
}
