package com.raphael.customer;

public record CustomerRegistrationRequest(
        String firstName,
        String lastName,
        String email
    ) {
}
