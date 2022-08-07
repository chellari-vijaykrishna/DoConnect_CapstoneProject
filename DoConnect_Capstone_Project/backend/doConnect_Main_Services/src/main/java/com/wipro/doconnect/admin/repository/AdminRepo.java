package com.wipro.doconnect.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnect.admin.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {

	public Admin findByEmail(String email);

}
