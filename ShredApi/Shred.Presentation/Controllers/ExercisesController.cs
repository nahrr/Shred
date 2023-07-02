using MediatR;
using Microsoft.AspNetCore.Mvc;
using Shred.Application.Exercises.Queries;
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

    [HttpGet]
    public async Task<IActionResult> GetExercises([FromQuery] int take, int? skip, CancellationToken cancellationToken)
    {
        var query = new GetExercisesQuery(take, skip);
        Result<IEnumerable<ExerciseResponse>> exercises = await Sender.Send(query, cancellationToken);

        if (exercises.IsFailure)
        {
            return BadRequest(exercises.ErrorMessage);
        }

        return Ok(exercises.Value);
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpPost]
    public async Task<IActionResult> AddExercises(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
