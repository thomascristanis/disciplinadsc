--CREATE TABLE Curto
CREATE TABLE Curso (
    Id INT PRIMARY KEY IDENTITY,
    nome VARCHAR (50) NOT NULL
);

--CREATE TABLE Aluno
CREATE TABLE Aluno (
    Id INT PRIMARY KEY IDENTITY,
    matricula VARCHAR (20) NOT NULL,
    nome VARCHAR (255) NOT NULL,
    faltas int NOT NULL,
    curso INT,
    CONSTRAINT FK_Curso FOREIGN KEY (curso)
    REFERENCES Curso(Id)
);

INSERT INTO Curso (nome) VALUES ('Licenciatura em Informática')
Select * From Curso

--REMOVER
DROP TABLE Aluno
DROP TABLE Curso

--SELECAO
SELECT * FROM Aluno

--
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110010, 'Alan Kardek Santos Silva', 8, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20161044110035, 'Anderson Gomes da Silva', 0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110040, 'Andre Felipe de Andrade Medino', 0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20161044110042, 'Camila Felix do Nascimento', 8, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110030, 'Carlos Henrique da Costa e Silva', 6, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110017, 'Cíntia Samara Cavalcante dos Santos', 2, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20141044110246, 'Darcleiton Martins da Silva', 10, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110004, 'Djanilson Bezerra Teixeira',	6, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110024, 'Francinaldo Gomes da Silva', 4, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20141044110297, 'Hézio Dantas da Silva', 6, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110023, 'Jefferson Araujo de Souza', 0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110018, 'Ludgero Pacifico de Melo Filho', 2, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20151044110227, 'Marcelo Pereira Wanderley Pimenta', 4, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110014, 'Osvaldo Antunes de Melo Junior',  0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110006, 'Paulo Victor do Nascimento Silva', 2, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20161044110030, 'Philippe Cavalcante de Menezes', 0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110044, 'Rayonara Caroliny Campos', 10, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20161044110017, 'Ruan Gomes de Moura', 2, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20151044110405, 'Wanderson Tavares de Souza Torres', 2, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20171044110025, 'William Souza do Nascimento', 0, 1)
INSERT INTO Aluno (matricula, nome, faltas, curso) VALUES (20121044110209, 'Wilton da Silva Camboim', 8, 1)