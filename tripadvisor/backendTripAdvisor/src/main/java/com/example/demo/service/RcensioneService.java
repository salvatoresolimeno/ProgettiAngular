package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Recensione;
import com.example.demo.repository.RecensioneRepository;

@Service
public class RcensioneService {
	@Autowired
	RecensioneRepository recensioneRepository;

	public Recensione addRefs(Recensione recensione) {
		
		return recensioneRepository.save(recensione);
	}

	public List<Recensione> getAll() {
		return recensioneRepository.findAll();
	}

	public List<Recensione> getRefs(long id) {
		return recensioneRepository.findByAttivitaId(id);
	}

	public List<Recensione> getRefsUtente(long id) {
		return recensioneRepository.findByUtenteId(id);
	}

	public Recensione editRefs(long id, Recensione recensione) {
		Recensione r=recensioneRepository.findById(id).get();
		r.setData(recensione.getData());
		r.setDescrizione(recensione.getDescrizione());
		r.setVoto(recensione.getVoto());
		return recensioneRepository.save(r);
	}

	public void deleteRefs(long id) {
		recensioneRepository.deleteById(id);;
	}
}
