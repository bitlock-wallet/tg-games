import { NextResponse } from 'next/server';
import { runMigrationsAction } from '../../actions/migrate';

export async function GET() {
  try {
    await runMigrationsAction();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/migrate] migration error', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
