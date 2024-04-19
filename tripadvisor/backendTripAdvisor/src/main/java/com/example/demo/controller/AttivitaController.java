package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Attivita;
import com.example.demo.service.AttivitaService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin
@RestController
@RequestMapping("api/attivita")
public class AttivitaController {
	@Autowired
	AttivitaService attivitaService;
	
	@PostMapping("add")
	public Attivita addAttivita(@RequestBody Attivita attivita) {		
		return attivitaService.addAttivita(attivita);
	}
	@GetMapping("getAll")
	public List<Attivita> getMethodName() {
		return attivitaService.getAll();
	}
	@GetMapping("get/{id}")
	public Attivita getAttivita(@PathVariable long id) {
		return attivitaService.getAttivita(id);
	}
	
	
	
	
}	
