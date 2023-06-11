using MediatR;
using Shred.Domain.Entities;
using Shred.Domain.Repositories;
using Shred.Domain.Shared;

namespace Shred.Application.Workouts.Commands.CreateWorkout
{
    internal sealed class CreateWorkoutCommandHandler : IRequestHandler<CreateWorkoutCommand, Result<Guid>>
    {
        private readonly IExerciseRepository _exerciseRepository;
        private readonly IWorkoutRepository _workoutRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CreateWorkoutCommandHandler(
             IExerciseRepository exerciseRepository,
            IWorkoutRepository workoutRepository,
            IUnitOfWork unitOfWork)
        {
            _workoutRepository = workoutRepository;
            _unitOfWork = unitOfWork;
            _exerciseRepository = exerciseRepository;
        }

        public async Task<Result<Guid>> Handle(CreateWorkoutCommand request, CancellationToken cancellationToken)
        {
            var existingExerciseIds = await _exerciseRepository.GetExistingExerciseIdsAsync(request.Exercises.Select(x => x.Id).ToList(), cancellationToken);

            if (existingExerciseIds.Count != request.Exercises.Count)
            {
                var missingExerciseIds = request.Exercises.Select(x => x.Id).Except(existingExerciseIds);
                return Result.Failure<Guid>($"Can't find exercises with these ids: {string.Join(", ", missingExerciseIds)}");
            }

            var workout = CreateWorkout(request);

            var exercises = request.Exercises.Select(e => CreateUserExercise(e, request.UserId, workout.Id)).ToList();

            await AddEntitiesToRepositoriesAsync(exercises, workout, cancellationToken);

            return Result.Success(workout.Id);
        }


        private UserExercise CreateUserExercise(CreateExerciseCommand exerciseCommand, Guid userId, Guid workoutId)
        {
            var sets = exerciseCommand.Sets.Select(setCommand => new Set(Guid.NewGuid(), setCommand.Reps, setCommand.Weight)).ToList();

            return new UserExercise(Guid.NewGuid(), exerciseCommand.Id, userId, workoutId, true, sets);
        }

        private Workout CreateWorkout(CreateWorkoutCommand request) =>
            Workout.Create(Guid.NewGuid(),
                request.Name,
                request.IsCompleted,
                DateTime.UtcNow,
                request.UserId);

        private async Task AddEntitiesToRepositoriesAsync(List<UserExercise> exercises, Workout workout, CancellationToken cancellationToken)
        {
            _workoutRepository.Add(workout);
            _exerciseRepository.Add(exercises);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
        }
    }
}
