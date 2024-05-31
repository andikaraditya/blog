import getPostMetadata from "@/app/components/getPostMetadata"
import fs from "fs"
import type { Metadata, ResolvingMetadata } from "next"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx"
import Link from "next/link"

function getPostContent(slug: string) {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  const matterResult = matter(content)
  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,
    content: matterResult.content,
  }
}

export async function generateStaticParams() {
  const metadata = getPostMetadata()
  return metadata.map((post) => {
    return {
      slug: post.slug,
    }
  })
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  const matterResult = matter(content)
  return {
    title: matterResult.data.title,
    description: matterResult.data.subtitle,
  }
}

function BlogPage(props: any) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  return (
    <main className="bg-gray-100 dark:bg-[#1F1F1F] min-h-[100vh]">
      <div className="w-[85%] xl:w-[60%] mx-auto pt-10">
        <Link className="text-2xl underline dark:text-gray-300" href={"/"}>
          Home
        </Link>
        <h1 className="lg:w-[800px] mx-auto text-4xl md:text-6xl font-bold text-slate-800 my-4 text-center dark:text-gray-100">
          {post.title}
        </h1>
        <p className="text-center mx-auto dark:text-gray-300 ">
          Posted on {new Date(post.date).toDateString()}
        </p>
      </div>
      <div className="max-lg:w-[85%] prose prose-base md:prose-xl prose-h2:text-slate-800 prose-p:text-justify mx-auto dark:text-gray-300 dark:prose-h2:dark:text-gray-100">
        <Markdown>{post.content}</Markdown>
      </div>
    </main>
  )
}

export default BlogPage
