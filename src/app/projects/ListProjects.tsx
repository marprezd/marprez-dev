import { Card } from '@/components/Card'
import ComingSoon from '@/components/ComingSoon'
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
        <div className="my-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <Card.Header>Python</Card.Header>
              <Card.Media>
                <Image
                  src={`/images/${project.logo.src}`}
                  alt={project.logo.alt}
                  className="rounded-md object-cover"
                  width={340}
                  height={230}
                />
              </Card.Media>
              <Card.Title>{project.title}</Card.Title>
              <Card.Description>{project.description}</Card.Description>
              <Card.Footer>
                <Card.Link href={project.link.href}>{project.link.label}</Card.Link>
              </Card.Footer>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
