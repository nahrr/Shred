using MediatR;
using Microsoft.AspNetCore.Mvc;
using Shred.Application.Workouts.Commands.CreateWorkout;
using Shred.Application.Workouts.Queries;
using Shred.Domain.Shared;

namespace Shred.Presentation.Controllers;

[ApiController]
[Route("api/workout")]
[Produces("application/json")]

public class WorkoutsController : ApiController
{
    public WorkoutsController(ISender sender)
        : base(sender)
    {
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetWorkoutById([FromRoute] Guid id, CancellationToken cancellationToken)
    {
        var query = new GetWorkoutByIdQuery(id);
        Result<WorkoutResponse> workout = await Sender.Send(query, cancellationToken);

        if (workout.IsFailure)
        {
            return BadRequest(workout.ErrorMessage);
        }

        return Ok(workout.Value);
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpGet]
    public async Task<IActionResult> GetWorkouts(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<IActionResult> AddWorkout(
        [FromBody] CreateWorkoutCommand command,
        CancellationToken cancellationToken)
    {
        Result<Guid> result = await Sender.Send(command, cancellationToken);

        if (result.IsFailure)
        {
            return BadRequest(result.ErrorMessage);
        }

        return CreatedAtAction(
            nameof(GetWorkoutById),
            new { id = result.Value },
            result.Value);
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpDelete]
    [Route("id")]
    public async Task<IActionResult> DeleteWorkoutById([FromRoute] Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    [ApiExplorerSettings(IgnoreApi = true)]
    [HttpPut]
    [Route("id")]
    public async Task<IActionResult> UpdateWorkoutById([FromRoute] Guid id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
