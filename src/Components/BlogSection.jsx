import React from 'react'
import SectionHeading from './SectionHeading'
import BlogCard from './BlogCard'

const posts = [
  {
    id: 1,
    title: "How Education Is Changing Lives",
    excerpt: "Discover how access to education is transforming communities.",
    image: "/Image/blogpic1.jpeg",
    date: "Jan 20, 2026",
    author: "Sarah Chen",
  },
  {
    id: 2,
    title: "Medical Camps That Saved Hundreds",
    excerpt: "A look inside our recent healthcare outreach programs.",
    image: "/Image/blogpic2.jpg",
    date: "Jan 15, 2026",
    author: "Dr. James Wilson",
  },
  {
    id: 3,
    title: "Feeding Families in Crisis",
    excerpt: "How emergency food relief helped vulnerable families.",
    image: "/Image/blogpic3.jpg",
    date: "Jan 10, 2026",
    author: "Maria Rodriguez",
  },
];

import { useNavigate } from 'react-router-dom'

function BlogSection() {
  const navigate = useNavigate()

  const handleReadMore = (postId) => {
    // navigate to the blog post route
    navigate(`/blog/${postId}`)
  };

  return (
    <section className="py-18">
      <SectionHeading
        title="Latest Stories"
        subtitle="Updates and stories from the field"
      />

      <div className="grid gap-6 mt-12 md:grid-cols-3 items-stretch">
        {posts.map((post) => (
          <BlogCard 
            key={post.id} 
            post={post}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogSection 