﻿using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Shred.Presentation.Controllers;

[ApiController]
public abstract class ApiController : ControllerBase
{
    protected readonly ISender Sender;
    protected ApiController(ISender sender) => Sender = sender;
}
