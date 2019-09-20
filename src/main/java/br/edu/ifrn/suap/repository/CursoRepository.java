package br.edu.ifrn.suap.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifrn.suap.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {
    
}