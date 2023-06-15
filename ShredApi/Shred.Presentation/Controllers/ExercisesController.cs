using MediatR;
using Microsoft.AspNetCore.Mvc;
using Shred.Application.Workouts.Queries;
using Shred.Domain.Shared;

namespace Shred.Presentation.Controllers;

[ApiController]
[Route("api/exercise")]
[Produces("application/json")]
public class ExercisesController : ApiController
{
    public ExercisesController(ISender sender)
        : base(sender)
    {
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetExerciseById([FromRoute] Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }


    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpGet]
    public async Task<IActionResult> GetExercises(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
