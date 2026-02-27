import React from "react";
import Image from "next/image";
export interface JobDetailsProps {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  categories: string[];
  logoUrl?: string;
}

const JobHeader: React.FC<JobDetailsProps> = ({
  title,
  company,
  location,
  type,
  description,
  categories,
  logoUrl,
}) => {
  return (
    <div className="bg-white w-full lg:w-[48%] border border-gray-200  p-8">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={company}
                width={900}
                height={900}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-foreground font-bold ">
                {company.charAt(0)}
              </span>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
            <p className="text-text-neutrals/50 mt-1">
              {company} • {location}
            </p>
          </div>
        </div>

        {/* Job Type */}
        <span className="text-sm font-medium text-foreground border border-foreground px-4 py-2  w-fit">
          {type}
        </span>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Job Description
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Categories */}
      <div className="mt-6 flex gap-3 flex-wrap">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`text-sm px-4 py-1 rounded-full font-medium ${
              index % 2 === 0
                ? "bg-[#EB85331A] text-[#FFB836]"
                : "bg-[#56CDAD1A] text-[#56CDAD]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobHeader;
