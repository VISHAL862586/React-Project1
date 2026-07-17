package com.vishal.complaintsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vishal.complaintsystem.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

    User findByPhone(String phone);
}