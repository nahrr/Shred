using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Shred.Domain.Entities;

namespace Shred.Persistence.Configuration;

internal class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("User");

        builder.HasKey(x => x.Id);

        builder.HasMany(u => u.Workouts)
           .WithOne(w => w.User)
           .HasForeignKey(w => w.UserId);
    }
}
