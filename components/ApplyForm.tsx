"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      resume: "",
      coverNote: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Full name is required"),

      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      resume: Yup.string()
        .url("Enter a valid URL")
        .required("Resume link is required"),

      coverNote: Yup.string().max(
        300,
        "Cover note must be under 300 characters",
      ),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Application Submitted:", values);
      alert("Application submitted successfully!");
      resetForm();
    },
  });

  return (
    <div className="bg-white w-full lg:w-[48%] shadow-sm border border-gray-200 p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Apply for this Job
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            // name="names"
            {...formik.getFieldProps("name")}
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email *
          </label>
          <input
            type="email"
            // name="email"
            {...formik.getFieldProps("email")}
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        {/* Resume */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Resume Link (URL) *
          </label>
          <input
            type="url"
            // name="resume"
            {...formik.getFieldProps("resume")}
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://your-resume-link.com"
          />
          {formik.touched.resume && formik.errors.resume && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.resume}</p>
          )}
        </div>

        {/* Cover Note */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Cover Note
          </label>
          <textarea
            // name="coverNote"
            rows={4}
            {...formik.getFieldProps("coverNote")}
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write something about yourself..."
          />
          {formik.touched.coverNote && formik.errors.coverNote && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.coverNote}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-foreground text-white font-medium py-3 hover:bg-blue-700 transition"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
