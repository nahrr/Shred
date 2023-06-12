
## EF Core

cd ShredApi

# install tool so you can use "dotnet ef"
dotnet tool install --global dotnet-ef

# Create new migration, Creates map Migration in Shred.Persistence where all migrations are saved
dotnet ef migrations add Init --project .\Shred.Persistence\Shred.Persistence.csproj --startup-project .\Shred.App\Shred.App.csproj

dotnet ef database update --project --project .\Shred.Persistence\Shred.Persistence.csproj --startup-project .\Shred.App\Shred.App.csproj

# Update to specific version named Init, to remove 
# dotnet ef database update Init --project .\Shred.Persistence\Shred.Persistence.csproj --startup-project .\Shred.App\Shred.App.csproj

# dotnet ef database drop --project --project .\Shred.Persistence\Shred.Persistence.csproj --startup-project .\Shred.App\Shred.App.csproj
