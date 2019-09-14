Use master
CREATE LOGIN alunos WITH PASSWORD = 'ifrn@123';
GO;

Use [bd-dsc]
CREATE USER alunos WITH PASSWORD = 'ifrn@123';
GO 
EXEC sp_addrolemember N'db_datareader', N'alunos'
EXEC sp_addrolemember N'db_datawriter', N'alunos'
GO