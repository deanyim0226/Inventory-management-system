package com.example.inventory.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Item {


    @Id
    private int id;
    private String name;
    private String description;
    private int category_id;
    private int quantity;
    private double price;
}
