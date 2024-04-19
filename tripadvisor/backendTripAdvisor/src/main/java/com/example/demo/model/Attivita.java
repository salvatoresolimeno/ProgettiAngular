package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Attivita {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private long tel;
	private String indirizzo;
	private String linkMaps;
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL , mappedBy = "attivita")
	private List<Recensione> listarefs;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public long getTel() {
		return tel;
	}
	public void setTel(long tel) {
		this.tel = tel;
	}
	public String getIndirizzo() {
		return indirizzo;
	}
	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}
	public List<Recensione> getListarefs() {
		return listarefs;
	}
	public void setListarefs(List<Recensione> listarefs) {
		this.listarefs = listarefs;
	}
	public Attivita() {
		super();
	}
	public String getLinkMaps() {
		return linkMaps;
	}
	public void setLinkMaps(String linkMaps) {
		this.linkMaps = linkMaps;
	}
	
	
	
}
