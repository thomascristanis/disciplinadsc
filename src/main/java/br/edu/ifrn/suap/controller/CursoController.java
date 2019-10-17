package br.edu.ifrn.suap.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifrn.suap.model.Curso;
import br.edu.ifrn.suap.repository.CursoRepository;

/**
 * AlunoController
 */
@RestController
public class CursoController {

    @Autowired
    private CursoRepository repoCurso;

    @RequestMapping(value = "/api/curso/listar", method =  RequestMethod.GET)
    public List<Curso> listar() {
        return repoCurso.findAll();
    }

    @RequestMapping(value = "/api/curso/listar/{id}", method =  RequestMethod.GET)
    public Curso listar(@PathVariable Long id) {
        return repoCurso.findById(id).get();
    }

    @RequestMapping(value = "/api/curso/salvar", method =  RequestMethod.POST)
    @ResponseBody
    public Curso salvar(@RequestBody Curso curso) {
        return repoCurso.save(curso);
    }

    @RequestMapping(value = "/api/curso/deletar/{id}", method =  RequestMethod.DELETE)
    public void deletar(@PathVariable Long id) {
        repoCurso.deleteById(id);
    }

    @RequestMapping(value = "/api/curso/editar/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Curso> editar(@PathVariable Long id, @RequestBody Curso novoCurso) {
        Optional<Curso> optCurso = repoCurso.findById(id); // Procura o objeto a ser editado pelo seu id
        if(optCurso.isPresent()){ // Verifica se existe
            Curso antigoCurso = optCurso.get(); //Atualiza o Aluno antigo
            antigoCurso.setNome(novoCurso.getNome());
            repoCurso.save(antigoCurso);
            return new ResponseEntity<Curso>(antigoCurso, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Caso não encontre retorna erro 404
    }
}