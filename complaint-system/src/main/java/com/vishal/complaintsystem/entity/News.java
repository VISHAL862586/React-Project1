package com.vishal.complaintsystem.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // DEFAULT CONSTRUCTOR (IMPORTANT)
    public News() {
    }

    // PARAMETERIZED CONSTRUCTOR
    public News(String title) {
        this.title = title;
    }

    // GETTERS
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    // SETTERS
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}