import ResourceCard from '@/components/ResourceCard'
import { server } from 'config'
import fs, { promises as ps } from 'fs'

// get resources from local file
async function getListResources(): Promise<Resource[]> {
  if (fs.existsSync('public/content/resources.json')) {
    const res = await ps.readFile('public/content/resources.json', 'utf-8')
    const resources: Resource[] = JSON.parse(res)
    return resources
  }

  const resources = fetch(`${server}/content/resources.json`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return resources
}

export default async function ListResources(): Promise<JSX.Element> {
  const resources: Resource[] = await getListResources()

  const categorizedResources = resources.reduce((acc: any, resource: Resource) => {
    if (acc[resource.category]) {
      acc[resource.category].push(resource)
    } else {
      acc[resource.category] = [resource]
    }
    return acc
  }, {})

  return (
    <div className='grid grid-flow-row gap-4'>
      {Object.keys(categorizedResources).map((category) => (
        <div key={category} className="bg-gray-200 p-4 rounded-lg dark:bg-gray-900/75">
          <h3 className="text-xl font-bold tracking-tight underline decoration-secondary-40 decoration-4 underline-offset-8 dark:decoration-secondary-80 md:text-2xl">
            {category}
          </h3>
          <div className="mx-auto my-2 mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {categorizedResources[category].map((resource: Resource) => (
              <ResourceCard key={resource.url} resource={resource} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
