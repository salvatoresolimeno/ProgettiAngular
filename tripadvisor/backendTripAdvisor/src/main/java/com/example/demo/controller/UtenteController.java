package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Utente;
import com.example.demo.service.UtenteService;


@RestController
@RequestMapping("api/utente")
@CrossOrigin
public class UtenteController {
	@Autowired
	UtenteService utenteService;
	
	
	@PostMapping("registrazione")
	public Utente addUtente(@RequestBody Utente utente) {
		return utenteService.addUtente(utente);
	}
	
	@GetMapping("login")
	public Utente getMethodName(@RequestParam String email,@RequestParam String password) {
		return utenteService.login(email,password);
	}
	
}
