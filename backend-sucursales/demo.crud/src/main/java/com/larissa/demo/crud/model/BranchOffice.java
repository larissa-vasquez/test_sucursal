package com.larissa.demo.crud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity(name="branch_office")
public class BranchOffice {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	@Column(unique=true, nullable=false)
	private String name;
	
	
	@Column(nullable=false)
	private String manager;
	

	@Column(nullable=false, length=9)
	private String phone_number;
	
	@Column(nullable=false, length=50)
	private String address;
	
	@Column(length=9)
	private String fax;
	
	private int orders;
	
	@Column(nullable=false)
	private String creation_date ;
	
	@Column(nullable=false)
	private String modification_date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public int getOrders() {
		return orders;
	}

	public void setOrders(int orders) {
		this.orders = orders;
	}

	public String getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(String creation_date) {
		this.creation_date = creation_date;
	}

	public String getModification_date() {
		return modification_date;
	}

	public void setModification_date(String modification_date) {
		this.modification_date = modification_date;
	}

	
	
}

