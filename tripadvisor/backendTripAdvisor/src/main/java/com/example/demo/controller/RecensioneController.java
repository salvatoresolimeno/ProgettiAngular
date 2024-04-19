package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Recensione;
import com.example.demo.service.RcensioneService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin
@RestController
@RequestMapping("api/recensioni")

public class RecensioneController {
	@Autowired
	RcensioneService recensioneService;
	
	
	@PostMapping("add")
	public Recensione addRecensione(@RequestBody Recensione recensione) {		
		return recensioneService.addRefs(recensione);
	}
	
	@GetMapping("getAll")
	public List<Recensione> getAll() {
		return recensioneService.getAll();
	}
	
	@GetMapping("find/{id}")
	public List<Recensione> getMethodName(@PathVariable long id) {
		return recensioneService.getRefs(id);
	}
	
	@GetMapping("findByUtente")
	public List<Recensione> getRefByUtente(@RequestParam long id) {
		return  recensioneService.getRefsUtente(id);
	}
	
	@PutMapping("edit/{id}")
	public Recensione putMethodName(@PathVariable long id, @RequestBody Recensione recensione) {		
		return recensioneService.editRefs(id,recensione);
	}
	@DeleteMapping("delete/{id}")
	public void deleteRefs(@PathVariable long id) {
		 recensioneService.deleteRefs(id);
	}
	
}
