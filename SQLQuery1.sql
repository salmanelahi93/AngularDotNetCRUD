create database testdb
use Employee

CREATE TABLE Employees (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Department NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO Employees (Name, Department, Email) VALUES 
('John Doe', 'IT', 'john.doe@example.com'),
('Jane Smith', 'HR', 'jane.smith@example.com'),
('Michael Johnson', 'Finance', 'michael.johnson@example.com'),
('Emily Davis', 'Marketing', 'emily.davis@example.com'),
('Robert Brown', 'Sales', 'robert.brown@example.com');

SELECT * FROM Employees;


