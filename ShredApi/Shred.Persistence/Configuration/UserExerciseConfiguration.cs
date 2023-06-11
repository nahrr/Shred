using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class UserExerciseConfiguration : IEntityTypeConfiguration<UserExercise>
{
    public void Configure(EntityTypeBuilder<UserExercise> builder)
    {
        builder.ToTable("UserExercise");

        builder.HasKey(ue => ue.Id);

        builder.Property(ue => ue.IsCompleted)
            .IsRequired();

        builder.HasOne(uv => uv.Exercise).WithMany(x => x.UserExercises).HasForeignKey(uv => uv.ExerciseId).OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(uv => uv.User).WithMany(x => x.UserExercises).HasForeignKey(uv => uv.UserId).OnDelete(DeleteBehavior.Restrict);

        builder.HasMany(ue => ue.Sets)
       .WithOne(s => s.UserExercise)
       .HasForeignKey(s => s.UserExerciseId);

    }
}
