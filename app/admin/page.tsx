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
      category: "",
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Job title is required"),
      company: Yup.string().required("Company name is required"),
      location: Yup.string().required("Location is required"),
      category: Yup.string().required("Category is required"),
      description: Yup.string().required("Job description is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("https://qtec-backend-fawn.vercel.app/api/jobs/", {
          title: values.title.trim(),
          company: values.company.trim(),
          location: values.location.trim(),
          category: values.category.trim(), // ✅ lowercase
          description: values.description.trim(),
        });

        alert("Job posted successfully!");
        resetForm();
      } catch (error: any) {
        console.error("Failed to post job:", error.response?.data || error);
        alert(
          error.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
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

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Category *
          </label>
          <input
            type="text"
            {...formik.getFieldProps("category")}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Design, Marketing"
          />
          {formik.touched.category && formik.errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.category}
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
