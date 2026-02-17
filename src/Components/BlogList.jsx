import React, { useState } from 'react'
import BlogCard from './BlogCard'
import SectionHeading from './SectionHeading'
import blogpic1 from '../assets/Image/blogpic1.jpeg'

const allPosts = [
  {
    id: 1,
    title: "How Education Is Changing Lives",
    excerpt: "Discover how access to education is transforming communities.",
    image: blogpic1,
    date: "Jan 20, 2026",
    author: "Sarah Chen",
    content: "Education is the foundation of change. In our latest initiative, we've provided educational resources to over 500 students in underserved communities. The impact has been remarkable, with a 60% improvement in academic performance among participating students. This journey has shown us that when given the right tools and support, every child can succeed."
  },
  {
    id: 2,
    title: "Medical Camps That Saved Hundreds",
    excerpt: "A look inside our recent healthcare outreach programs.",
    image: "/blog2.jpg",
    date: "Jan 15, 2026",
    author: "Dr. James Wilson",
    content: "Our medical camps reached over 800 people in remote villages, providing free healthcare services and essential medicines. The team of dedicated doctors and volunteers worked tirelessly to ensure every patient received quality care. From basic health screenings to specialized consultations, these camps have become a lifeline for many families who lack access to regular medical services."
  },
  {
    id: 3,
    title: "Feeding Families in Crisis",
    excerpt: "How emergency food relief helped vulnerable families.",
    image: "/blog3.jpg",
    date: "Jan 10, 2026",
    author: "Maria Rodriguez",
    content: "During the recent crisis, our food relief program distributed meals to over 1000 families in need. Each package was carefully prepared with nutritious items to support health and wellbeing. The response from the community has been overwhelming, and we're committed to continuing this vital support for those facing food insecurity."
  },
  {
    id: 4,
    title: "Community Water Project Completed",
    excerpt: "A new water supply brings hope to a village.",
    image: "/blog2.jpg",
    date: "Jan 5, 2026",
    author: "Ahmed Hassan",
    content: "After months of construction and community effort, the water project is finally complete. The village now has access to clean, safe drinking water, eliminating hours of daily labor spent fetching water. This project will improve health outcomes, especially for children, and allow parents to focus on other productive activities."
  },
  {
    id: 5,
    title: "Women's Skill Training Program Launch",
    excerpt: "Empowering women through vocational training.",
    image: "/blog1.jpg",
    date: "Dec 28, 2025",
    author: "Priya Sharma",
    content: "We're thrilled to launch our new skills training program for women, covering areas like digital literacy, tailoring, and small business management. Over 200 women have already enrolled. This program aims to create economic independence and empower women in their communities."
  },
  {
    id: 6,
    title: "Youth Leadership Summit Success",
    excerpt: "Inspiring the next generation of changemakers.",
    image: "/blog3.jpg",
    date: "Dec 20, 2025",
    author: "David Thompson",
    content: "Our annual youth leadership summit brought together young leaders from across the region. Through workshops, mentoring sessions, and networking events, these young changemakers gained skills and inspiration to drive positive change in their communities. The energy and commitment we witnessed was truly inspiring."
  },
];

const POSTS_PER_PAGE = 3;

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleReadMore = (postId) => {
    // Navigate to blog post - can be updated when routing is added
    console.log("Read more about post:", postId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="All Stories"
          subtitle="Explore our latest updates and stories from the field"
        />

        <div className="grid gap-8 mt-12">
          {currentPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post}
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-16">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-lg transition ${
                currentPage === page
                  ? 'bg-green-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogList
