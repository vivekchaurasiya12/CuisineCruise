import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const response = await axios.post('/api/contact', formData);
            if (response.data.success) {
                setResponseMessage('Thank you for contacting us. We will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-extrabold text-red-700 mb-4 text-center">Contact Us</h1>
                <p className="text-lg text-gray-700 mb-6 text-center">
                    We're here to assist you! Feel free to reach out to us anytime.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                {responseMessage && (
                    <p className="mt-4 text-center text-lg text-gray-700">{responseMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Contact;