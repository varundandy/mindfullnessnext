export interface Category {
  code: string
  title: string
  description: string
}

export interface Post {
  title: string
  subTitle: string
  slug: string
  body: string
  publishedAt: string
  image: Image
  relatedPosts: Post[]
  previewContent: string
  tags: string[]
  estimatedReadingTime: number
  moreStories: Post[]
  imageURL: string
  pinned: boolean
  imageAlt: string
  categories: Category[]
}

export interface Image {
  url: string
  alt: string
}

