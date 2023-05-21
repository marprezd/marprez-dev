import ComingSoon from '@/components/ComingSoon'
import { LinkIcon } from '@/components/Icons'
import { server } from 'config'
import fs, { promises as ps } from 'fs'
import Image from 'next/image'

// get projects from local file
async function getListProjects(): Promise<Project[]> {
  if (fs.existsSync('public/content/projects.json')) {
    const res = await ps.readFile('public/content/projects.json', 'utf-8')
    const projects: Project[] = JSON.parse(res)
    return projects
  }

  const projects = fetch(`${server}/content/projects.json`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return projects
}

export default async function ListProjects(): Promise<JSX.Element> {
  const projects: Project[] = await getListProjects()
  return (
    <>
      {projects.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              className="group overflow-hidden rounded-xl shadow-md"
              href={project.link.href}
              key={project.title}
            >
              <div className="bg-white p-2 dark:bg-gray-950 sm:flex">
                <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl sm:w-56">
                  <Image
                    className="absolute left-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src={`/images/${project.logo.src}`}
                    alt={project.logo.alt}
                    width={900}
                    height={900}
                  />
                </div>
                <div className="mt-4 grow px-4 sm:ml-6 sm:mt-0 sm:px-0">
                  <h3 className="text-xl font-semibold group-hover:text-gray-600 dark:group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                  <p className="relative z-10 mt-4 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-40 dark:text-primary-80">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  )
}
