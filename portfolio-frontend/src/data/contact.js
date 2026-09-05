

const contactData = {

        heading: "Contact",
        title: "Let's Connect",
        description: "Feel free to reach out to me for opportunities, projects, collaborations, or any questions.",
        phoneNo: "+91 9772627384",
        email: "soyalmugal143@gmail.com",
        location: "Sikar, Rajasthan, India",
        phoneName: "Phone",
        emailName: "Email",
        locationName: "Location",

        socialLinks: [
            {
                name: "Github",
                url: "https://github.com/Soyalkhan01"
            
            },

            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/soyalkhan"
            }
        ],
        formFields: [
            {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Enter your name",
            },
            {
                name: "phone",
                label: "Phone",
                type: "text",
                placeholder: "Enter your number",
            },
            {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
        {
            name: "message",
            label: "Message",
            type: "textarea",
            placeholder: "Enter your message",
        },
        ],

        button:
            {
                text: "Send Message",
                varient: "primary"
            },

        loadingHeading: 
            {
                text: "Sending Message"
            },
        loadingDescription: 
            {
                text: "Please wait a moment..."
            },

        popupSymbole: 
            {
                symbole: "✓"
            },
        popupHeading: 
            {
                heading: "Message Sent"
            },
        popupDescription: 
            {
                DescriptionText: "Thanks for reaching out. I'll get back to you soon."
            },
        

    };

export default contactData;
