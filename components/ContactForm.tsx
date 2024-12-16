"use client";

import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = {
      fullname: formData.get("fullname")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
    };

    const newErrors: Record<string, string> = {};

    if (!formValues.fullname) newErrors.fullname = "Fullname is required.";
    if (!formValues.email) newErrors.email = "Email is required.";
    if (!formValues.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    setErrors({});
    e.currentTarget.reset();
  };

  return (
    <form action='/' className="startup-form w-full" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fullname" className="startup-form_label">
          Your Fullname
        </label>
        <Input
          id="fullname"
          name="fullname"
          className="startup-form_input"
          required
          placeholder="Write your fullname"
        />

        {errors.fullname && <p className="startup-form_error">{errors.fullname}</p>}
      </div>

      <div>
        <label htmlFor="email" className="startup-form_label">
          Your Email
        </label>
        <Input
          id="email"
          name="email"
          className="startup-form_input"
          required
          placeholder="Write your Email"
        />

        {errors.email && <p className="startup-form_error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="startup-form_label">
          Your Message
        </label>
        <Input
          id="message"
          name="message"
          className="startup-form_input"
          required
          placeholder="Write your Message"
        />

        {errors.message && <p className="startup-form_error">{errors.message}</p>}
      </div>
      <Button
        type="submit"
        className="startup-form_btn text-white"
      >
        Send message
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  )
}

export default ContactForm