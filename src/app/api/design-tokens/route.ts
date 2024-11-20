import { NextResponse } from 'next/server';
import designTokens from '@/styles/design-tokens.json';

export async function GET() {
  return new NextResponse(JSON.stringify(designTokens, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="design-tokens.json"',
    },
  });
}
