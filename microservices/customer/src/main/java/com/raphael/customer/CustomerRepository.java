package com.raphael.customer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> { // customer object as the entity, and integer as the datatype for the id
}
