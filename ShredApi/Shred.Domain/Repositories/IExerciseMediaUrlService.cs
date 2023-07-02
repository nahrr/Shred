namespace Shred.Domain.Repositories;

public interface IExerciseMediaUrlService
{
    public string GenerateThumbnailUrl(string muscleGroup, string mediaPath);

    public string GenerateInstructionsUrl(string muscleGroup, string mediaPath, bool hasVideo);
}
