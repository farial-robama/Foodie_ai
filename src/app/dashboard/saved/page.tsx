"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";
import SaveButton from "@/components/ui/SaveButton";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

interface SavedRestaurant {
  _id: string;
  name: string;
  cuisine: string;
  images: string[];
  rating: number;
  reviewCount: number;
  location: string;
  priceRange: number;
  isOpen: boolean;
  description: string;
}

export default function SavedPage() {
  const { userId }                    = useAuth();
  const [saved, setSaved]             = useState<SavedRestaurant[]>([]);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    if (!userId) return;
    fetch(`/api/saved?clerkId=${userId}`)
      .then(r => r.json())
      .then(data => { setSaved(data.saved || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [userId]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Saved Restaurants</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          {saved.length} favourite place{saved.length !== 1 ? "s" : ""}
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-40 rounded-2xl bg-stone-200 dark:bg-stone-800 animate-pulse" />
          ))}
        </div>
      ) : saved.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-12 text-center">
          <Heart size={32} className="mx-auto mb-3 text-stone-300 dark:text-stone-600" />
          <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-1">No saved restaurants yet</p>
          <p className="text-stone-400 text-xs mb-4">Tap the heart on any restaurant to save it here.</p>
          <Link href="/explore" className="text-sm font-medium hover:underline" style={{ color: "var(--color-primary)" }}>
            Explore restaurants →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {saved.map(r => (
            <div key={r._id} className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex gap-0 hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="relative w-32 flex-shrink-0">
                <Image src={r.images?.[0] || "/placeholder.jpg"} alt={r.name} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 p-4 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="min-w-0">
                    <Badge variant="primary" className="mb-1">{r.cuisine}</Badge>
                    <p className="font-semibold text-stone-900 dark:text-white text-sm leading-tight truncate">{r.name}</p>
                  </div>
                  {/* Unsave button — clicking heart removes from list live */}
                  <SaveButton restaurantId={r._id} />
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <StarRating rating={r.rating} size={12} />
                  <span className="text-xs text-stone-500 dark:text-stone-400 ml-1">{r.rating.toFixed(1)} ({r.reviewCount})</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <MapPin size={11} />
                  <span className="truncate">{r.location}</span>
                  <span className="mx-1">·</span>
                  <span>{formatPrice(r.priceRange)}</span>
                </div>

                <Link href={`/restaurants/${r._id}`} className="text-xs font-medium hover:underline" style={{ color: "var(--color-primary)" }}>
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}