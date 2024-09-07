package com.example.inventory.domain;

import com.example.inventory.domain.type.TransactionType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.Instant;


@Entity
public class Transaction {

    @Id
    private int id;
    private TransactionType type;
    private int item_id;
    private int user_id;
    private Instant transactionTime;
}
