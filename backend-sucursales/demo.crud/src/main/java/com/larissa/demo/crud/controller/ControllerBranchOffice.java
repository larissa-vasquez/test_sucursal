package com.larissa.demo.crud.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.larissa.demo.crud.exception.BranchNotFoundException;
import com.larissa.demo.crud.model.BranchOffice;
import com.larissa.demo.crud.repository.RepositoryBranchOffice;

@RestController
@CrossOrigin("http://localhost:3000")
public class ControllerBranchOffice {

	@Autowired
	private RepositoryBranchOffice repositoryBranchOffice;

	@PostMapping("/addbranch")
	BranchOffice newBranchOffice(@RequestBody BranchOffice newBranchOffice) {
		return repositoryBranchOffice.save(newBranchOffice);
	}
	
	@GetMapping("/getBranches")
	List<BranchOffice> getAllBranchOffices(){
		return repositoryBranchOffice.findAll();
	}
	
	@GetMapping("/branch/{id}")	
	BranchOffice getBranchById(@PathVariable int id){
		
		return repositoryBranchOffice.findById(id)
			.orElseThrow(()-> new BranchNotFoundException(id));
	}
	
	@PutMapping("/updateBranch/{id}")
	BranchOffice updateBranch(@RequestBody BranchOffice newBranchOffice, @PathVariable int id) {
		return repositoryBranchOffice.findById(id)
				.map(branchOffice ->{
					branchOffice.setName(newBranchOffice.getName());
					branchOffice.setManager(newBranchOffice.getManager());
					branchOffice.setPhone_number(newBranchOffice.getPhone_number());
					
					branchOffice.setAddress(newBranchOffice.getAddress());
					branchOffice.setFax(newBranchOffice.getFax());
					branchOffice.setOrders(newBranchOffice.getOrders());
					
					branchOffice.setCreation_date(newBranchOffice.getCreation_date());
					branchOffice.setModification_date(newBranchOffice.getModification_date());
					
					
					return repositoryBranchOffice.save(branchOffice);
				}).orElseThrow(()-> new BranchNotFoundException(id));
	}
	
	@DeleteMapping("/deleteBranch/{id}")
	
	String deleteBranch(@PathVariable int id) {
		if(!repositoryBranchOffice.existsById(id)) {
			throw new BranchNotFoundException(id);
		}
		
		repositoryBranchOffice.deleteById(id);
		return ("Sucursal eliminada");
	}
}

