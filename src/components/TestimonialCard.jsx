const TestimonialCard = ({ avatar, star, text, name = "Anonymous User", role = "Student" }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full">
      {/* Header with avatar and stars */}
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt="User avatar" 
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm truncate">{name}</h4>
          <p className="text-gray-500 text-xs truncate">{role}</p>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < star ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        "{text}"
      </p>

      {/* Bottom accent */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Verified Review</span>
          <div className="w-2 h-2 bg-primary-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;