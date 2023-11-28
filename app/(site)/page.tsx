import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello, I&apos;m Rakesh!</h1>
      <p className="mt-3 text-xl text-gray-600">Check out my projects:</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="hover:scale-105 hover:border-blue-500 transition border-2 border-gray-500 rounded-lg p-1">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold mt-2">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
