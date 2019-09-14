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

import br.edu.ifrn.suap.model.Aluno;
import br.edu.ifrn.suap.repository.AlunoRepository;

/**
 * AlunoController
 */
@RestController
public class AlunoController {

    @Autowired
    private AlunoRepository repoAlunos;

    @RequestMapping(value = "/listar", method =  RequestMethod.GET)
    public List<Aluno> listar() {
        return repoAlunos.findAll();
    }

    @RequestMapping(value = "/listar/{id}", method =  RequestMethod.GET)
    public Aluno listar(@PathVariable Long id) {
        return repoAlunos.findById(id).get();
    }

    @RequestMapping(value = "/salvar", method =  RequestMethod.POST)
    @ResponseBody
    public Aluno salvar(@RequestBody Aluno aluno) {
        return repoAlunos.save(aluno);
    }

    @RequestMapping(value = "/deletar/{id}", method =  RequestMethod.DELETE)
    public void deletar(@PathVariable Long id) {
        repoAlunos.deleteById(id);
    }

    @RequestMapping(value = "/editar/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Aluno> editar(@PathVariable Long id, @RequestBody Aluno novoAluno) {
        Optional<Aluno> optAluno = repoAlunos.findById(id); // Procura o objeto a ser editado pelo seu id
        if(optAluno.isPresent()){ // Verifica se existe
            Aluno antigoAluno = optAluno.get(); //Atualiza o Aluno antigo
            antigoAluno.setMatricula(novoAluno.getMatricula());
            antigoAluno.setNome(novoAluno.getNome());
            antigoAluno.setFaltas(novoAluno.getFaltas());
            repoAlunos.save(antigoAluno);
            return new ResponseEntity<Aluno>(antigoAluno, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Caso não encontre retorna erro 404
    }
}