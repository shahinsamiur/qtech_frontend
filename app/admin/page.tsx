"use client";

import JobCard from "@/components/adminJobCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  categories: string[];
}
export default function Hero() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://qtec-backend-fawn.vercel.app/api/jobs/",
        );
        setJobs(response.data.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="w-full min-h-screen text-red-500 py-20 max-sm:pt-30">
      <section>
        <div className="w-full flex flex-wrap md:space-x-4 space-y-4 justify-center md:justify-start items-center">
          {jobs?.map((item, index) => (
            <JobCard
              key={index}
              id={item.id}
              title={item.title}
              company={item.company}
              location={item.location}
              description={item.description}
              type="Full Time"
              categories={["Marketing", "Design"]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
