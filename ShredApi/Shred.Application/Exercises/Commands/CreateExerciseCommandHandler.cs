using MediatR;
using Shred.Domain.Repositories;

namespace Shred.Application.Exercises.Commands;
//TODO:
internal sealed class CreateExerciseCommandHandler
{
    private readonly IExerciseRepository _exerciseRepository;
    private readonly IUnitOfWork _unitOfWork;

    public Task Handle(CreateExerciseCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
