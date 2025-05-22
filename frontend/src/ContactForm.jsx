import { useState } from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
        };

        const url = "http://127.0.0.1:5000/create_contact";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Correct placement of the body
        };

        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const message = await response.json();
            alert(message.message); // Fix to access message correctly
        } else {
            // Successful logic here
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label> {/* Fixed label */}
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} // Fixed onChange
                />
            </div>

            <div>
                <label htmlFor="lastName">Last Name:</label> {/* Fixed label */}
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} // Fixed onChange
                />
            </div>

            <div>
                <label htmlFor="email">Email:</label> {/* Fixed label */}
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Fixed onChange
                />
            </div>

            <button type="submit">Create Contact</button>
        </form>
    );
};

export default ContactForm;
