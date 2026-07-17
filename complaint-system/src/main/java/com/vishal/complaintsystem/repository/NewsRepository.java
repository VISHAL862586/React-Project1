package com.vishal.complaintsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vishal.complaintsystem.entity.News;

public interface NewsRepository extends JpaRepository<News, Long> {
}