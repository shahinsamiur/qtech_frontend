"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobHeader from "@/components/JobDescriptionHeader";
import ApplyForm from "@/components/ApplyForm";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  categories: string[];
}

export default function JobDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `https://qtec-backend-fawn.vercel.app/api/jobs/${id}`,
        );
        setJob(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <section className="flex flex-col md:flex-row gap-5 pt-20 lg:pt-24 pb-10 px-4 justify-between">
      <JobHeader {...job} />
      <ApplyForm jobId={id} />
    </section>
  );
}
