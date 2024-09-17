import { airplane, airplane1 } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "airline-management-system",
    name: "Airline Management System",
    overview: "It is based on a microservice architecture, comprising four distinct microservices that collectively provide a comprehensive flight management system.",
    description:
        `The Flight Service Backend Project is a microservice-based system comprising four interconnected components. The core Flight Service manages essential flight-related models and operations. The Flight Booking Service handles reservations, featuring automatic cancellation for expired payments and RabbitMQ integration for queuing booking information. The Flight API Gateway Service centralizes access with rate limiting, reverse proxy, JWT authentication, and role-based authorization. Lastly, the Flight Notification Service consumes queued booking data to send confirmation emails via Node Mailer. This architecture creates a comprehensive flight management system with secure API access and automated user notifications.`,
    features: {
        "Core Features": [
            "Provides up-to-date information on flight statuses, delays, and gate changes.",
            "Provide a way for users to check the current status of their booked flights.",
            "Let users create accounts to manage their bookings and personal information.",
            "Send confirmation emails to users after they make a booking.",
            "Auto Cancellation if user doesn't confirm the booking and make payment within time limit."
        ],
        "Flight Service": [
            "The airplane model includes essential information such as the airplane's model Number, seating capacity.",
            "The airport model contains information about each airport, such as its name, location, City code, address. This model enables efficient handling of airport-related data like flight scheduling, arrivals, and departures.",
            "The city model represents the cities or locations connected by the flight service. It stores information about each city name.",
            "The flight model serves as the core entity within the system, capturing details about individual flights. It contains information such as the flight number, airplaneId, departureAirportId and arrivalAirportId, scheduled departure and arrival times, price, totalSeats and boardingGate assigned to the flight.",
            "The seat model represents the seating arrangements within each airplane. It includes information about airplaneId, row, col, seatType (e.g., economy, business, first class). It enables efficient allocation of seats during the booking process.",
        ],
        "Flight Booking Service": [
            "Automatic Cancellation of Expired Bookings using cron jobs that runs every 30 seconds.",
            "The booking model includes a status field, which helps in tracking the progress of a booking.",
            "The booking model also contains a totalCost field, which is calculated based on the number of seats reserved (noOfSeats) and the corresponding cost per seat.",
            "Integration with RabbitMQ, When a booking is successfully made this microservice sends relevant booking information to the Flight Notification Service. It consume these messages and carry out additional actions."
        ],
        "Flight Api Gateway Service": [
            "Centralized Entry Point, This microservice acts as a central entry point for all incoming requests from clients and applications that want to interact with the flight service.",
            "User and Role Models: The Flight API Gateway Service incorporates user and role models to manage user information and permissions. The user model represents individual users of the system, containing details like user ID, username, email, and password (usually stored securely using hashing and salting techniques). The role model represents various roles that users can have, such as admin, customer, or flight_company.",
            "Rate Limiting - It sets a threshold on the number of requests a client can make within a specified time frame.",
            "Reverse Proxy - The microservice utilizes a reverse proxy for efficient routing of requests to the backend flight service.",
            "Authentication System using JWT to ensure secure user authentication.",
            "This microservice also features an authorization system that enforces access control based on user roles.",
        ],
        "Flight Notification Service": [
            "Consumes booking information messages from RabbitMQ queue sent by the Flight Booking Service.",
            "Utilizes Node Mailer to send confirmation emails to users regarding their successful flight bookings.",
            "Manages email templates to ensure consistent and professional communication with users.",
            "Implements robust error handling to manage failures in message consumption or email sending processes.",
            "Designed to handle high volumes of booking notifications efficiently.",
        ],
    },
    tags: [
        techTags.node,
        techTags.rabbitMQ,
        techTags.microservices,
        techTags.mysql
    ],
    images: [
        airplane1,
        airplane1
    ],
    image: airplane,
    github: "https://github.com/GauravGhost/Flight-Service",
    live: "",
}