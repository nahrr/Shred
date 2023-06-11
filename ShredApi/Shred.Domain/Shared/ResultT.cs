namespace Shred.Domain.Shared;

public class Result<T> : Result
{
    public T Value { get; private set; }

    protected internal Result(T value, bool isSuccess, string error)
        : base(isSuccess, error)
    {
        Value = value;
    }

    public static Result<T> Success(T value) => new Result<T>(value, true, string.Empty);

    public static Result<T> Failure(string message) => new Result<T>(default(T), false, message);
}
