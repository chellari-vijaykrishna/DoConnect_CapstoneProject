package com.wipro.doconnect.image.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnect.image.entity.ImageModel;

@Repository
public interface ImageModelRepo extends JpaRepository<ImageModel, Long> {

	public Optional<ImageModel> findByName(String name);

}
