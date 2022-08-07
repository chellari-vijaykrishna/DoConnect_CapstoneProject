package com.wipro.doconnectchat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.doconnectchat.entity.Message;

@Repository
public interface MessageRepo extends JpaRepository<Message, Long> {

}
