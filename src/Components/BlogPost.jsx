import React from 'react'
import { Link } from 'react-router-dom'
import blogpic1 from '../assets/blogpic1.jpeg';

const blogPosts = {
  1: {
    id: 1,
    title: "How Education Is Changing Lives",
    image: blogpic1,
    date: "Jan 15, 2026",
    author: "Mamie Doe",
    content: [] `Education is the foundation of change. In our latest initiative, we've provided educational resources to over 500 students in underserved communities. The impact has been remarkable, with a 60% improvement in academic performance among participating students.

This journey has shown us that when given the right tools and support, every child can succeed. Our program focuses on:

• Providing quality textbooks and learning materials
• Training teachers in modern pedagogical methods
• Establishing computer labs in rural schools
• Creating scholarship programs for underprivileged students
• Building mentorship networks between students and professionals

The response from both students and parents has been overwhelming. Parents tell us they see renewed hope in their children's eyes, and students are more engaged than ever before. One student, 12-year-old Rajesh, wrote to us saying: "Thanks to this program, I can now dream of becoming an engineer."

Our commitment doesn't stop here. We're expanding this program to reach 1000 more students next year, ensuring that every child, regardless of their economic background, has access to quality education.`
  },
  2: {
    id: 2,
    title: "Engaging Schools  ",
    image: "/blog2.jpg",
    date: "Mar 10, 2025",
    author: "David Johnson",
    content: ` for these communities.`
  },
  3: {
    id: 3,
    title: "Feeding Families in Crisis",
    image: "/blog3.jpg",
    date: "Jan 10, 2026",
    author: "Mercy Kollie",
    content: `During the recent crisis, our food relief program distributed meals to over 1000 families in need. Each package was carefully prepared with nutritious items to support health and wellbeing.

The response from the community has been overwhelming, and we're committed to continuing this vital support for those facing food insecurity. Our relief efforts included:

• Distribution of 10+ meal packages with essential nutrition
• Assistance to 15+ elderly and disabled individuals
• Training programs on food security and nutrition

This crisis reminded us of the fragility many families face daily. A single emergency can push vulnerable families into food insecurity. Our goal is to not only provide immediate relief but also build long-term resilience through community gardens, microfinance programs, and vocational training.

Every donation made a real difference. We're grateful for the support and will continue working towards a world where no child goes to bed hungry.`
  }
};

function BlogPost({ postId = 1 }) {
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="h-96 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span className="text-sm">{post.date}</span>
          <span>•</span>
          <span className="text-sm">By {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Body Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('•')) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-6 text-gray-700">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('• ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to help make a difference?
            </h3>
            <p className="text-gray-700 mb-6">
              Join us in our mission to create positive change in communities. Your support, whether through donations, volunteering, or advocacy, matters.
            </p>
            <div className="flex gap-4">
              <Link to="/donate" className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition">
                Donate Now
              </Link>
              <button className="border border-green-600 text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost
