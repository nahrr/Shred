namespace Shred.Domain.Shared;
public class Result
{
    protected internal Result(bool isSuccess, string errorMessage)
    {
        if (isSuccess && !string.IsNullOrWhiteSpace(errorMessage))
        {
            throw new InvalidOperationException();
        }

        if (!isSuccess && string.IsNullOrWhiteSpace(errorMessage))
        {
            throw new InvalidOperationException();
        }

        IsSuccess = isSuccess;
        ErrorMessage = errorMessage;
    }

    public bool IsSuccess { get; }

    public bool IsFailure => !IsSuccess;

    public string ErrorMessage { get; private set; }


    public static Result Success() => new(true, string.Empty);

    public static Result<TValue> Success<TValue>(TValue value) => new(value, true, string.Empty);

    public static Result<TValue> Failure<TValue>(string message) => new(default!, false, message);

    //public static Result<TValue> Failure/*<TValue>*/(Error error) => new(default, false, error.Message);
}
