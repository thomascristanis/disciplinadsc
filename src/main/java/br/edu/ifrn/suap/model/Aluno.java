package br.edu.ifrn.suap.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Aluno
 */
@Entity
public class Aluno {

    @Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	private String matricula;
	private String nome;
	private int faltas;

	public String getMatricula() {
		return matricula;
	}
	
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

    public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getFaltas() {
		return faltas;
	}
	
	public void setFaltas(int faltas) {
		this.faltas = faltas;
	}
}