package com.wipro.doconnect.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnect.user.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

	public User findByEmail(String email);
}
