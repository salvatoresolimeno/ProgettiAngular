package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Attivita;
import com.example.demo.repository.AttivitaRepository;

@Service
public class AttivitaService {
	@Autowired
	AttivitaRepository attivitaRepository;

	public Attivita addAttivita(Attivita attivita) {
		return attivitaRepository.save(attivita);
	}

	public List<Attivita> getAll() {
		return attivitaRepository.findAll();
	}

	public Attivita getAttivita(long id) {
		return attivitaRepository.findById(id).get();
	}
}
