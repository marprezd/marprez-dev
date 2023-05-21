import SnipeetCard from '@/components/SnippetCard'
import { allSnippets, Snippet } from 'contentlayer/generated'

// get snippets from the contentlayer
async function getAllSnippets(): Promise<Snippet[]> {
  return allSnippets
}

export default async function ListSnippets(): Promise<JSX.Element> {
  const snippets = await getAllSnippets()
  return (
    <div className="grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
      {snippets.map((snippet: Snippet) => (
        <SnipeetCard key={snippet.slug} snippet={snippet} />
      ))}
    </div>
  )
}
