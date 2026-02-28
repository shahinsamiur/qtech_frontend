"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PostJobPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      type: "Full Time", // added
      category: "",
      logoUrl: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      company: Yup.string().required("Company name is required"),
      location: Yup.string().required("Job location is required"),
      description: Yup.string().required("Job description is required"),
      category: Yup.string().required("Please add at least one category"),
      logoUrl: Yup.string().url("Enter a valid URL"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("https://qtec-backend-fawn.vercel.app/api/jobs/", {
          title: values.title,
          company: values.company,
          location: values.location,
          description: values.description,
          type: values.type,
          category: values.category,
          logoUrl: values.logoUrl,
        });

        alert("Job posted successfully!");
        resetForm();
      } catch (error) {
        console.error("Failed to post job:", error);
        alert("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-sm p-8 mt-12 rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Post a New Job</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Job Title *
          </label>
          <input
            type="text"
            {...formik.getFieldProps("title")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job title"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Company *
          </label>
          <input
            type="text"
            {...formik.getFieldProps("company")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
          />
          {formik.touched.company && formik.errors.company && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.company}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Location *
          </label>
          <input
            type="text"
            {...formik.getFieldProps("location")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job location"
          />
          {formik.touched.location && formik.errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description *
          </label>
          <textarea
            rows={5}
            {...formik.getFieldProps("description")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job description"
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Job Type *
          </label>
          <select
            {...formik.getFieldProps("type")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Categories *
          </label>
          <input
            type="text"
            {...formik.getFieldProps("category")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Design, Marketing, Tech"
          />
          {formik.touched.category && formik.errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.category}
            </p>
          )}
        </div>

        {/* Logo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Company Logo URL
          </label>
          <input
            type="url"
            {...formik.getFieldProps("logoUrl")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/logo.png"
          />
          {formik.touched.logoUrl && formik.errors.logoUrl && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.logoUrl}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-foreground text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobPage;
