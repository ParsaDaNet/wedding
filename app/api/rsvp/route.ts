import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { assert } from 'superstruct';
import { RsvpStruct } from '../../components/schema';
import { Guest } from '../../components/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Superstruct runtime validation (throws an explicit error if payload structures mismatch)
    try {
        assert(body, RsvpStruct);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (validationError: any) {
      return NextResponse.json({ message: 'Validation failed', errors: validationError.message }, { status: 400 });
    }

    const { partyName, guests, songRequest, messageForCouple } = body;

    // const ALLOWED_CODES = ['FOREVER2027', 'SMITHWEDDING', 'LOVEALWAYS']; 
    // if (!ALLOWED_CODES.includes(invitationCode.trim().toUpperCase())) {
    //   return NextResponse.json({ message: 'Incorrect Invitation Code.' }, { status: 401 });
    // }

    // 2. Stream layout to Google sheets credentials array
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://googleapis.com'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toLocaleString('en-GB');

    const rowsToAppend = guests.map((guest: Guest) => [
      timestamp,
    //   invitationCode.toUpperCase(),
      partyName,
      guest.name,
      guest.attendance,
      songRequest || '',
      messageForCouple || ''
    ]);

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: rowsToAppend },
    });

    return NextResponse.json({ message: 'RSVP appended completely!' }, { status: 200 });

  } catch (error) {
    console.error('Google Serverless Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}