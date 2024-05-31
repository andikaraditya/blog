import Link from "next/link"
import getPostMetadata from "./components/getPostMetadata"

export default function Home() {
  const titles = getPostMetadata()
  return (
    <main className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-md:w-[85%] flex flex-col gap-3 w-[700px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 my-11 text-center">
          Lightstation Blog
        </h1>
        {titles.map((el, index) => {
          return <BlogTitle title={el.title} slug={el.slug} key={index} />
        })}
      </div>
    </main>
  )
}

interface TitleProps {
  title: string
  slug: string
}

const BlogTitle: React.FC<TitleProps> = ({ title, slug }) => {
  return (
    <div className="bg-slate-100 pt-3 pb-1 px-3 border-b-[3px] border-slate-800">
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl  md:text-3xl font-semibold line-clamp-1">{title}</h2>
      </Link>
    </div>
  )
}
