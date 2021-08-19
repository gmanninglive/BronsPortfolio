import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Button from "./Button"

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzkyaqo")
  if (state.succeeded) {
    return <p>Thanks your email has been sent!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-6 flex justify-between">
        {/* Name & Email label */}
        <label htmlFor="name" className="text-white font-bold">
          Name
        </label>
        <label htmlFor="email" className="text-white font-bold">
          Email Address
        </label>
      </div>
      <div className="pt-1 flex justify-between">
        {" "}
        {/* Name & Email input */}
        <input
          id="name"
          type="text"
          name="name"
          className="w-1/2 mr-2 rounded-md"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          className="w-1/2 rounded-md"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="pt-6">
        {/* Message label*/}
        <label htmlFor="message" className="text-white font-bold">
          Write a Message
        </label>
      </div>
      <div className="pt-1">
        {/* Message input*/}
        <textarea
          id="message"
          name="message"
          rows="10"
          className="w-full rounded-md"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="pt-2 flex justify-end">
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
