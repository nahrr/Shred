using MediatR;
using Shred.Domain.Shared;

namespace Shred.Application.Exercises.Queries;

public sealed class GetExercisesQueryHandler : IRequestHandler<GetExercisesQuery, Result<IEnumerable<ExerciseResponse>>>
{
    public Task<Result<IEnumerable<ExerciseResponse>>> Handle(GetExercisesQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
