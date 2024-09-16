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
        "Flight Booking Service": [],
        "Flight Api Gateway Service": [],
        "Flight Notification Service": [],
    },
    tags: [
        techTags.node,
        techTags.rabbitMQ,
        techTags.microservices,
        techTags.mysql
    ],
    images:[
        airplane1,
        airplane1
    ],
    image: airplane,
    github: "https://github.com/GauravGhost/Flight-Service",
    live: "",
}