package com.larissa.demo.crud.exception;

public class BranchNotFoundException extends RuntimeException {

	public BranchNotFoundException(int id) {
		super("No existe la sucursal "+id);
	}
}

