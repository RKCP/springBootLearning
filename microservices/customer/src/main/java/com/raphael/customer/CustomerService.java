package com.raphael.customer;

public record CustomerService() {
    public void registerCustomer(CustomerRegistrationRequest request) {
        // takes in request that was sent from postman to controller, and builds a new customer with the details from that sent body
        Customer customer = Customer.builder()
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .build();

        // usually then do stuff with the customer, like validate email is valid, & not taken, and then store the customer in a database
    }
}
