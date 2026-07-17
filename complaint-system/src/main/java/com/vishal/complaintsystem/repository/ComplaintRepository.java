package com.vishal.complaintsystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vishal.complaintsystem.entity.Complaint;
import com.vishal.complaintsystem.entity.User;


public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
    
List<Complaint> findByUser(User user);
}