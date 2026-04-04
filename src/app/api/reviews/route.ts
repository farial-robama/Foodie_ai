import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Review from "@/models/Review";
import Restaurant from "@/models/Restaurant";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const restaurantId = searchParams.get("restaurantId");
    const userId       = searchParams.get("userId");

    const query: Record<string, unknown> = {};
    if (restaurantId) query.restaurantId = restaurantId;
    if (userId)       query.userId       = userId;

    const reviews = await Review.find(query)
      .populate("userId",       "name avatar")
      .populate("restaurantId", "name cuisine images")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("Reviews GET error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { userId, restaurantId, rating, comment } = body;

    if (!userId || !restaurantId || !rating || !comment) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const review = await Review.create({ userId, restaurantId, rating, comment });

    // Update restaurant rating
    const allReviews = await Review.find({ restaurantId });
    const avgRating  = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;
    await Restaurant.findByIdAndUpdate(restaurantId, {
      rating:      Math.round(avgRating * 10) / 10,
      reviewCount: allReviews.length,
    });

    return NextResponse.json({ review }, { status: 201 });
  } catch (error) {
    console.error("Reviews POST error:", error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}