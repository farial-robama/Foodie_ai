"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { formatDate } from "@/lib/utils";

interface Review {
  _id: string;
  rating: number;
  comment: string;
  createdAt: string;
  restaurantId: {
    _id: string;
    name: string;
    cuisine: string;
    images: string[];
  };
}

export default function ReviewsPage() {
  const { userId }            = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const load = async () => {
      try {
        // Get user MongoDB _id first
        const userRes  = await fetch(`/api/users?clerkId=${userId}`);
        const userData = await userRes.json();
        const mongoId  = userData.user?._id;

        if (!mongoId) { setLoading(false); return; }

        // Fetch all reviews by this user
        const res  = await fetch(`/api/reviews?userId=${mongoId}`);
        const data = await res.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [userId]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">My Reviews</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          {reviews.length} review{reviews.length !== 1 ? "s" : ""} written
        </p>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-28 rounded-2xl bg-stone-200 dark:bg-stone-800 animate-pulse" />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-12 text-center">
          <Star size={32} className="mx-auto mb-3 text-stone-300 dark:text-stone-600" />
          <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-1">
            No reviews yet
          </p>
          <p className="text-stone-400 text-xs mb-4">
            Visit a restaurant page and leave your first review!
          </p>
          <Link
            href="/explore"
            className="text-sm font-medium hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Explore restaurants →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5"
            >
              <div className="flex items-start gap-4">
                {/* Restaurant image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100 dark:bg-stone-800">
                  {review.restaurantId?.images?.[0] ? (
                    <img
                      src={review.restaurantId.images[0]}
                      alt={review.restaurantId.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Star size={20} className="text-stone-300" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-semibold text-stone-900 dark:text-white text-sm">
                        {review.restaurantId?.name || "Restaurant"}
                      </p>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {review.restaurantId?.cuisine}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <p className="text-xs text-stone-400">
                        {formatDate(review.createdAt)}
                      </p>
                      <Link
                        href={`/restaurants/${review.restaurantId?._id}`}
                        className="text-stone-400 hover:text-[var(--color-primary)] transition-colors"
                        title="View restaurant"
                      >
                        <ExternalLink size={13} />
                      </Link>
                    </div>
                  </div>

                  <StarRating rating={review.rating} size={14} className="mb-2" />

                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}