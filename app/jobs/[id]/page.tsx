import JobHeader from "@/components/JobDescriptionHeader";
import ApplyForm from "@/components/ApplyForm";

interface PageProps {
  params: { id: string };
}

export default function JobDetailsPage({}: PageProps) {
  // Dummy data (replace with API call later)
  const job = {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description:
      "ClassPass is looking for a Product Designer to help us build meaningful user experiences.\n\nResponsibilities:\n- Work with product team\n- Design intuitive interfaces\n- Conduct user research",
    categories: ["Design", "Marketing"],
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 pt-20 lg:pt-24 pb-10 px-4 justify-between">
      <JobHeader {...job} />
      <ApplyForm />
    </section>
  );
}
