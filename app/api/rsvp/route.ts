import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;

  if (!url || !secret) {
    console.error("Supabase environment variables are missing.");

    return NextResponse.json(
      { error: "The RSVP service is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const {
      attendance,
      firstName,
      lastName,
      email,
      hasGuest,
      guestName,
      childrenCount,
      childrenDetails,
      events,
      dietaryRequirements,
      alcohol,
      weddingTransport,
      brunchTransport,
      songSuggestion,
      message,
    } = body;

    if (
      !["accept", "decline"].includes(attendance) ||
      typeof firstName !== "string" ||
      !firstName.trim() ||
      typeof lastName !== "string" ||
      !lastName.trim() ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof hasGuest !== "boolean" ||
      !Number.isInteger(childrenCount) ||
      childrenCount < 0 ||
      !Array.isArray(events) ||
      !events.every(
        (event) => typeof event === "string" &&
          ["wedding", "brunch"].includes(event)
      ) ||
      !["yes", "no"].includes(alcohol) ||
      (weddingTransport != null &&
        !["car", "taxi"].includes(weddingTransport)) ||
      (brunchTransport != null &&
        !["car", "taxi"].includes(brunchTransport))
    ) {
      return NextResponse.json(
        { error: "Please check your RSVP details and try again." },
        { status: 400 }
      );
    }

    const supabase = createClient(url, secret);

    const { error } = await supabase.from("rsvps").insert({
      attendance,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      has_guest: hasGuest,
      guest_name: guestName || null,
      children_count: childrenCount,
      children_details: childrenDetails || null,
      events,
      dietary_requirements: dietaryRequirements || null,
      alcohol,
      wedding_transport: weddingTransport || null,
      brunch_transport: brunchTransport || null,
      song_suggestion: songSuggestion || null,
      message: message || null,
    });

    if (error) {
      console.error("RSVP database insert failed:", error.message);

      return NextResponse.json(
        { error: "We couldn't save your RSVP. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Your RSVP has been saved successfully." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}