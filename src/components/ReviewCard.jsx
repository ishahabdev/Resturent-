import { Star, Quote } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-card-hover transition-all duration-300 relative flex flex-col justify-between h-full">
      <div className="absolute top-5 right-5 text-amber-200">
        <Quote className="w-8 h-8 opacity-40 fill-current" />
      </div>

      <div className="space-y-3">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-cheezYellow text-cheezYellow" />
          ))}
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed italic">
          "{review.comment}"
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="flex items-center gap-3 pt-5 mt-4 border-t border-amber-50">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-cheezYellow"
        />
        <div>
          <h4 className="text-sm font-bold text-cheezBrown leading-tight">
            {review.name}
          </h4>
          <p className="text-[11px] text-zinc-400">
            {review.role} • <span className="text-cheezYellow-dark font-medium">{review.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
