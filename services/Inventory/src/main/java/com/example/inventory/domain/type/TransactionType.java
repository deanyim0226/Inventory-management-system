package com.example.inventory.domain.type;

public enum TransactionType {

    ADD(1,"Add"), EDIT(2,"Edit"), DELETE(3,"Delete");

    private final int id;
    private final String name;

    TransactionType(int id, String name){
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
