"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCancel } from "react-icons/md";
import axios from "axios";

export interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: "Full Time" | "Part Time" | "Remote" | string;
  categories: string[];
  logoUrl?: string;
  onClick?: () => void; // Optional callback if parent wants to refresh
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  description,
  type,
  categories,
  logoUrl,
  onClick,
}) => {
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation from Link

    const confirmed = confirm("Are you sure you want to delete this job?");
    if (!confirmed) return;

    try {
      await axios.delete(`https://qtec-backend-fawn.vercel.app/api/jobs/${id}`);
      alert("Job deleted successfully!");

      // Optional: notify parent to refresh list
      if (onClick) onClick();
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job. Please try again.");
    }
  };

  return (
    <Link
      href={`/jobs/${id}`}
      className="bg-white w-full md:w-[45%] relative lg:w-[23.5%] space-y-4 shadow-sm border border-[#D6DDEB] p-4 px-6 hover:shadow-sm transition duration-300 cursor-pointer"
    >
      {/* Delete Icon */}
      <div
        onClick={handleDelete}
        className="absolute size-8 -top-3 -right-3 rounded-full flex items-center justify-center"
      >
        <MdCancel className="text-3xl text-red-500" />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4 justify-between w-full">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={company}
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-foreground font-semibold text-md">
                {company.charAt(0)}
              </span>
            )}
          </div>

          <span className="text-sm font-medium text-foreground border border-foreground px-3 py-1 ">
            {type}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">
          {company} • {location}
        </p>
      </div>

      <p className="mt-4 text-sm text-gray-600 line-clamp-2">{description}</p>

      <div className="mt-4 flex gap-3 flex-wrap">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`text-xs px-4 py-1 rounded-full font-medium ${
              index % 2 === 0
                ? "bg-[#EB85331A] text-[#FFB836]"
                : "bg-[#56CDAD1A] text-[#56CDAD]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default JobCard;
