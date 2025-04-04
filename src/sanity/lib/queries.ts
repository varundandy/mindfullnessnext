import { groq } from "next-sanity"

export const categoryQuery = groq`
*[_type == "category"] | order(date desc, _updatedAt desc) {
  code,
  title,
  description
}`

export const categoryByCodeQuery = groq`
*[_type == "category" && code == $code][0] {
  code,
  title,
  description
}`

const postFields = groq`
title,
subTitle,
"slug": slug.current,
publishedAt,
imageURL,
imageAlt,
"author": author->{name, "image": {"url": image.asset->url, "alt": image.alt} },
"image": {"url": mainImage.asset->url, "alt": mainImage.alt},
"previewContent":body[0].children[0].text,
"estimatedReadingTime": round(length(pt::text(body)) / 5 / 225 ),
tags,
"categories":categories[]->code`

export const getPostsForCategoryQuery = groq`
*[_type == "post" && $code in categories[]->code] | order(publishedAt desc)  {
  ${postFields}
}`

export const getRecentPostsForCategoryQuery = groq`
*[_type == "post" && $code in categories[]->code] | order(publishedAt desc)[0...5]  {
${postFields}
}`

export const getPostsByTag = groq`
*[_type == "post" && $code in categories[]->code && $tag in tags] | order(publishedAt desc) {
${postFields}
}`

export const searchPosts = groq`
*[_type == "post" && $code in categories[]->code && (title match $term || tags[] match $term)] | order(publishedAt desc)  {
${postFields}
}`

export const getFeaturedPosts = groq`
*[_type == "post" && featured == true] | order(publishedAt desc)  {
${postFields}
}`

export const getPostBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  body,
  relatedPosts[]->{title, "slug": slug.current, "image": {"url": mainImage.asset->url, "alt": mainImage.alt} , publishedAt, "previewContent":body[0].children[0].text,tags},
  "moreStories": *[_type == "post" && $code in categories[]->code && slug.current != $slug] | order(publishedAt desc, _updatedAt desc)[0...3] {title, "slug": slug.current, "image": {"url": mainImage.asset->url, "alt": mainImage.alt} , publishedAt, "previewContent":body[0].children[0].text,tags},
  ${postFields}
}
`

/* "previousPost": *[_type == "post" && ^.publishedAt > publishedAt]|order(publishedAt desc)[0]{title,"slug": slug.current},
"nextPost": *[_type == "post" && ^.publishedAt < publishedAt]|order(publishedAt asc)[0]{title,"slug": slug.current},
"morePosts": *[_type == "post" && count(relatedPosts) == 0 && slug.current != $slug] | order(publishedAt desc, _updatedAt desc)[0...3] {title, "slug": slug.current, "image": {"url": mainImage.asset->url, "alt": mainImage.alt} , publishedAt, "previewContent":body[0].children[0].text,tags}
 */
export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${postFields}
  }
}`

