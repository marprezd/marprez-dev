import SnipeetCard from '@/components/SnippetCard'
import { allSnippets, Snippet } from 'contentlayer/generated'

// get snippets from the contentlayer
async function getAllSnippets(): Promise<Snippet[]> {
  return allSnippets
}

export default async function ListSnippets(): Promise<JSX.Element> {
  const snippets = await getAllSnippets()
  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet: Snippet) => (
        <SnipeetCard key={snippet.slug} snippet={snippet} />
      ))}
    </div>
  )
}
