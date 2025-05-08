"use client";
import React from "react";
import githubIcon from "../../public/images/github.svg";
import linkIcon from "../../public/images/link.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("xdkokvbb");

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 bg-amber-800 rounded-lg shadow-lg p-6">
      <div className="text-white">
        <h5 className="text-2xl font-bold mb-2">Lets Connect</h5>
        <p className="text-white-400 mb-4 max-w-md">
          I would be more than happy to work with you, whether its a
          collaboration or a project... Whatever the case is let me help you
          bring your ideas to reality!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/pius-code"
            passHref
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={githubIcon}
              alt="GitHub"
              width={50}
              height={50}
              className="filter invert transition-transform transform hover:scale-110"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/pius-oblie-5b5183261"
            passHref
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={linkIcon}
              alt="LinkedIn"
              width={40}
              height={40}
              className="filter invert transition-transform transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 justify-center "
        >
          <label htmlFor="email" className="text-white font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="text-white font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-amber-600 text-white font-bold py-2 rounded hover:bg-amber-700 transition duration-200"
          >
            Submit
          </button>
        </form>
        {state.succeeded && (
          <p className="text-green-500 font-bold mt-4">
            Thanks for reaching out to me! I will be sure to contact you as soon
            as I can.
          </p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
