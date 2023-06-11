using MediatR;
using Shred.Domain.Repositories;
using Shred.Domain.Shared;

namespace Shred.Application.Workouts.Queries;

internal sealed class GetWorkoutByIdQueryHandler : IRequestHandler<GetWorkoutByIdQuery, Result<WorkoutResponse>>
{
    private readonly IWorkoutRepository _workoutRepository;

    public GetWorkoutByIdQueryHandler(
        IWorkoutRepository workoutRepository)
    {
        _workoutRepository = workoutRepository;
    }

    public async Task<Result<WorkoutResponse>> Handle(
        GetWorkoutByIdQuery query,
        CancellationToken cancellationToken)
    {
        var workout = await _workoutRepository.GetByIdAsync(query.Id);

        if (workout is null)
        {
            return Result.Failure<WorkoutResponse>($"Unable to find workout with id {query.Id}");
        }

        var response = new WorkoutResponse(
            workout.Id,
            workout.Name,
            workout.Date,
            workout.IsCompleted,
            workout
                .UserExercises
                .Select(x => new ExerciseResponse(
                    x.Exercise.Id,
                    x.Exercise.Name,
                    x.Sets
                    .Select(set => new SetResponse(
                        set.Reps,
                        set.Weight))
                    .ToList()))
                .ToList());

        return Result.Success(response);
    }
}
