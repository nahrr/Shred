using Shred.Domain.Repositories;

namespace Shred.Application.Services;

public class ExerciseMediaUrlService : IExerciseMediaUrlService
{
    //https://shred-exercises.s3.eu-north-1.amazonaws.com/exercises/Abdominals/Ab_Scissors/thumbnail.jpg
    private const string baseUrl = "https://shred-exercises.s3.eu-north-1.amazonaws.com/exercises";
    private const string image = "image.jpg";
    private const string video = "mp4";
    private const string thumbnail = "thumbnail.jpg";

    public string GenerateInstructionsUrl(
        string muscleGroup,
        string mediaPath,
        bool hasVideo)
    {
        if (hasVideo)
        {
            return $"{baseUrl}/{muscleGroup}/{mediaPath}/{video}";
        }

        return $"{baseUrl}/{muscleGroup}/{mediaPath}/{image}";
    }

    public string GenerateThumbnailUrl(
        string muscleGroup,
        string mediaPath)
    {
        return $"{baseUrl}/{muscleGroup}/{mediaPath}/{thumbnail}";
    }
}
