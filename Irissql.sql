CREATE TABLE ToDo (
	ID int NOT NULL identity(1,1) PRIMARY KEY,
    Title varchar(max),
	IsFavorite bit not null,
	IsCompleted bit
);