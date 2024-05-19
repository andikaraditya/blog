import fs from "fs"
import matter from "gray-matter"

export interface PostMetadata {
  title: string
  date: string
  subtitle: string
  slug: string
}

function getPostMetadata() {
  const folder = "posts/"
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  const posts = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`posts/${file}`, "utf-8")
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace(".md", ""),
    }
  })

  posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA < dateB) {
      return 1
    } else if (dateA > dateB) {
      return -1
    } else {
      return 0
    }
  })

  return posts
}

export default getPostMetadata
