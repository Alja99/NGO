import React from 'react'

function BlogCard({ post, onReadMore }) {
  const imageSrc = post.image
    ? (typeof post.image === 'string' ? post.image : post.image?.default ?? post.image)
    : null

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={post.title || 'blog image'}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="h-64 w-full bg-gray-200 flex items-center justify-center text-gray-500">
          Image unavailable
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{post.date}</span>
          {post.author && <span>•</span>}
          {post.author && <span>{post.author}</span>}
        </div>
        
        <h3 className="text-xl font-semibold mt-2 text-gray-900">{post.title}</h3>
        <p className="mt-2 text-gray-600">{post.excerpt}</p>

        <button 
          onClick={() => onReadMore && onReadMore(post.id)}
          className="mt-4 text-teal-600 font-medium hover:text-teal-700 transition"
        >
          Read More →
        </button>
      </div>
    </div>
  )
}

export default BlogCard
