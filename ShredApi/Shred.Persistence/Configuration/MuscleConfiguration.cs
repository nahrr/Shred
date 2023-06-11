using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class MuscleConfiguration : IEntityTypeConfiguration<Muscle>
{
    public void Configure(EntityTypeBuilder<Muscle> builder)
    {
        builder.ToTable("Muscle");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .IsRequired()
            .HasMaxLength(50);

        builder.HasIndex(x => x.Name)
            .IsUnique();
    }
}
