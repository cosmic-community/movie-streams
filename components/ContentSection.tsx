import ContentCard from '@/components/ContentCard'
import { Content } from '@/types'

interface ContentSectionProps {
  title: string
  content: Content[]
}

export default function ContentSection({ title, content }: ContentSectionProps) {
  if (!content || content.length === 0) {
    return null
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {title}
        </h2>

        {/* Content Grid - Horizontal Scroll */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {content.map((item) => (
            <div key={item.id} className="flex-none">
              <ContentCard content={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}