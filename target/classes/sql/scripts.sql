

--CREATE TABLE 
CREATE TABLE Aluno (
    Id INT PRIMARY KEY IDENTITY,
    matricula VARCHAR (20) NOT NULL,
    nome VARCHAR (255) NOT NULL,
    faltas int NOT NULL
);

--REMOVER
DROP TABLE Aluno

--SELECAO
SELECT * FROM Aluno

--
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110010, 'Alan Kardek Santos Silva', 8)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20161044110035, 'Anderson Gomes da Silva', 0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110040, 'Andre Felipe de Andrade Medino', 0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20161044110042, 'Camila Felix do Nascimento',	8)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110030, 'Carlos Henrique da Costa e Silva', 6)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110017, 'Cíntia Samara Cavalcante dos Santos', 2)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20141044110246, 'Darcleiton Martins da Silva', 10)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110004, 'Djanilson Bezerra Teixeira',	6)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110024, 'Francinaldo Gomes da Silva', 4)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20141044110297, 'Hézio Dantas da Silva', 6)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110023, 'Jefferson Araujo de Souza', 0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110018, 'Ludgero Pacifico de Melo Filho', 2)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20151044110227, 'Marcelo Pereira Wanderley Pimenta', 4)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110014, 'Osvaldo Antunes de Melo Junior',  0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110006, 'Paulo Victor do Nascimento Silva', 2)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20161044110030, 'Philippe Cavalcante de Menezes', 0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110044, 'Rayonara Caroliny Campos', 10)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20161044110017, 'Ruan Gomes de Moura', 2)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20151044110405, 'Wanderson Tavares de Souza Torres', 2)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20171044110025, 'William Souza do Nascimento', 0)
INSERT INTO Aluno (matricula, nome, faltas) VALUES (20121044110209, 'Wilton da Silva Camboim', 8)