using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Shred.App.Middlewares
{
    public class ExceptionMiddleware : IMiddleware
    {
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(ILogger<ExceptionMiddleware> logger) =>
            _logger = logger;

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                var traceId = Guid.NewGuid();

                _logger.LogError("TraceId: {traceId} - Error: {ex} \n Exception: {message}", traceId, ex.Message, ex);

                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Response.ContentType = "application/json";

                ProblemDetails problem = new()
                {
                    Status = (int)HttpStatusCode.InternalServerError,
                    Type = "Server error",
                    Title = "Server error",
                    Detail = "An interanl server has occured",

                };

                problem.Extensions["traceId"] = traceId;

                await context.Response.WriteAsJsonAsync(problem);
            }
        }
    }
}
