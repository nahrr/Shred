CREATE TABLE [User]
(
	Id UNIQUEIDENTIFIER PRIMARY KEY,
)

CREATE TABLE Muscle(
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE Workout(
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	[Name] NVARCHAR(150) NOT NULL,
	IsCompleted BIT NOT NULL,
	[Date] DATETIMEOFFSET(7) NOT NULL,
	[UserId] UNIQUEIDENTIFIER NOT NULL, 
	CONSTRAINT FK_Workout_User FOREIGN KEY (UserId) REFERENCES [User] (Id),
)

CREATE TABLE Exercise(
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	[Name] NVARCHAR(150) NOT NULL,
	MuscleId UNIQUEIDENTIFIER,
	Equipment NVARCHAR(50),
	Instructions NVARCHAR(MAX),
	CONSTRAINT UQ_Workout_Name UNIQUE ([Name]),
	CONSTRAINT FK_Exercise_Muscle FOREIGN KEY (MuscleId) REFERENCES Muscle (Id)
)

CREATE TABLE UserExercise(
    Id UNIQUEIDENTIFIER PRIMARY KEY,
    UserId UNIQUEIDENTIFIER NOT NULL,
    ExerciseId UNIQUEIDENTIFIER NOT NULL,
    WorkoutId UNIQUEIDENTIFIER NOT NULL,
    IsCompleted BIT NOT NULL,
    CONSTRAINT FK_UserExercise_User FOREIGN KEY (UserId) REFERENCES [User] (Id),
    CONSTRAINT FK_UserExercise_Exercise FOREIGN KEY (ExerciseId) REFERENCES Exercise (Id),
    CONSTRAINT FK_UserExercise_Workout FOREIGN KEY (WorkoutId) REFERENCES Workout (Id)
)

CREATE TABLE [Set]
(
	Id UNIQUEIDENTIFIER PRIMARY KEY,
	Reps INT NOT NULL,
	[Weight] DECIMAL(4, 2) NOT NULL,
	UserExerciseId UNIQUEIDENTIFIER NOT NULL, 
	CONSTRAINT FK_Set_UserExercise FOREIGN KEY (UserExerciseId) REFERENCES UserExercise (Id)
)