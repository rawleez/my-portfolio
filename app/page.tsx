import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Rawle's Portfolio
      </h1>
      <p className="mb-4 leading-7 text-neutral-700 dark:text-neutral-300">
        {`I build AI-driven products that connect distant data sources, understand user context, and empower people to make good decisions. I am interested in how product data can be turned into features that improve the customer experience and create real business value.`}
      </p>
      <div className="my-10">
        <BlogPosts />
      </div>
    </section>
  )
}
