package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Utente;
import com.example.demo.repository.UtenteRepository;

@Service
public class UtenteService {
	@Autowired
	UtenteRepository utenteRepository;

	public Utente addUtente(Utente utente) {
		return utenteRepository.save(utente);
	}

	public Utente login(String email, String password) {
		Utente u=utenteRepository.findByEmailAndPassword(email,password);
		if(u!=null) {
			return u;
		}
		return null;
	}
	
	
}
