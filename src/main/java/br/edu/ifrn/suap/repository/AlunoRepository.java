package br.edu.ifrn.suap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifrn.suap.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    
}