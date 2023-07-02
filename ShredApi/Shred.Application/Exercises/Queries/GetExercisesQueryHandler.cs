using MediatR;
using Shred.Domain.Repositories;
using Shred.Domain.Shared;

namespace Shred.Application.Exercises.Queries;

public sealed class GetExercisesQueryHandler : IRequestHandler<GetExercisesQuery, Result<IEnumerable<ExerciseResponse>>>
{
    private readonly IExerciseRepository _exerciseRepository;
    private readonly IExerciseMediaUrlService _exerciseMediaUrlService;

    public GetExercisesQueryHandler(
        IExerciseRepository exerciseRepository,
        IExerciseMediaUrlService exerciseMediaUrlService)
    {
        _exerciseRepository = exerciseRepository;
        _exerciseMediaUrlService = exerciseMediaUrlService;
    }

    public async Task<Result<IEnumerable<ExerciseResponse>>> Handle(GetExercisesQuery request, CancellationToken cancellationToken)
    {
        var exercises = await _exerciseRepository.GetExercisesAsync(request.Take, request.Skip, cancellationToken);

        if (exercises.Any() == false)
        {
            return Result.Failure<IEnumerable<ExerciseResponse>>("Unable to find any exercise");
        }

        var response = exercises.Select(e => new ExerciseResponse(
            e.Id,
            e.Name,
            e.MuscleGroup.Name,
            _exerciseMediaUrlService.GenerateThumbnailUrl(e.MuscleGroup.Name, e.MediaPath),
            _exerciseMediaUrlService.GenerateInstructionsUrl(e.MuscleGroup.Name, e.MediaPath, e.HasVideo)
        ));

        return Result.Success(response);
    }
}
