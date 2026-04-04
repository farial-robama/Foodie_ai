"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

export default function SaveButton({ restaurantId }: { restaurantId: string }) {
  const { userId } = useAuth();
  const [saved, setSaved]       = useState(false);
  const [loading, setLoading]   = useState(false);
  const [checked, setChecked]   = useState(false);

  // Check if already saved on mount
  useEffect(() => {
    if (!userId) return;
    fetch(`/api/saved?clerkId=${userId}`)
      .then(r => r.json())
      .then(data => {
        const ids = (data.saved || []).map((r: { _id: string }) => r._id);
        setSaved(ids.includes(restaurantId));
        setChecked(true);
      });
  }, [userId, restaurantId]);

  const toggle = async (e: React.MouseEvent) => {
    e.preventDefault(); // prevent card link navigation
    e.stopPropagation();
    if (!userId || loading) return;

    setLoading(true);
    const res  = await fetch("/api/saved", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ clerkId: userId, restaurantId }),
    });
    const data = await res.json();
    setSaved(data.saved);
    setLoading(false);
  };

  if (!userId || !checked) return null;

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`
        w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200
        backdrop-blur-sm shadow-sm
        ${saved
          ? "bg-red-500 text-white"
          : "bg-white/80 text-stone-400 hover:text-red-500 hover:bg-white"}
      `}
      title={saved ? "Unsave" : "Save"}
    >
      <Heart size={15} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}