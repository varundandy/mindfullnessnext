import { createClient } from "next-sanity"
import type { Category } from "./types"
import { apiVersion, dataset, projectId, useCdn } from "../env"
import {
  categoryQuery,
  categoryByCodeQuery,
  getPostsForCategoryQuery,
  getRecentPostsForCategoryQuery,
  getPostsByTag,
  searchPosts,
  getFeaturedPosts,
  getPostBySlugQuery,
} from "./queries"
import type { Post } from "./types"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function fetchCategories(): Promise<Category[]> {
  if (client) {
    return (await client.fetch(categoryQuery)) || []
  }
  return []
}

export async function fetchCategoryData(code: string): Promise<Category> {
  if (client) {
    return (await client.fetch(categoryByCodeQuery, { code })) || ({} as any)
  }
  return {} as any
}

export async function fetchAllPosts(code: string): Promise<Post[]> {
  if (client) {
    return (await client.fetch(getPostsForCategoryQuery, { code })) || ([] as any)
  }
  return [] as any
}

export async function fetchRecentPosts(code: string): Promise<Post[]> {
  if (client) {
    return (await client.fetch(getRecentPostsForCategoryQuery, { code })) || ([] as any)
  }
  return [] as any
}

export async function fetchPostsByTag(code: string, tag: string): Promise<Post[]> {
  if (client) {
    return (await client.fetch(getPostsByTag, { code, tag })) || ([] as any)
  }
  return [] as any
}

export async function searchPostsByTerm(code: string, term: string): Promise<Post[]> {
  if (client) {
    term = "*" + term + "*"
    return (await client.fetch(searchPosts, { code, term })) || ([] as any)
  }
  return [] as any
}

export async function fetchFeaturedPosts(code: string): Promise<Post[]> {
  if (client) {
    return (await client.fetch(getFeaturedPosts, { code })) || ([] as any)
  }
  return [] as any
}

export async function fetchPostBySlug(code: string, slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(getPostBySlugQuery, { code, slug })) || ({} as any)
  }
  return {} as any
}

