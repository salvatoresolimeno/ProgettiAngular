package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Recensione;
@Repository
public interface RecensioneRepository extends JpaRepository<Recensione, Long>{

	List<Recensione> findByAttivitaId(long id);

	List<Recensione> findByUtenteId(long id);

}
