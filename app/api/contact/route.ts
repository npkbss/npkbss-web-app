import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, business, email, phone, city, zohoProducts, requirements, agree } = body;

    if (!fullName || !email || !zohoProducts?.length || !requirements || !agree) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase.from('leads').insert([
      {
        full_name: fullName,
        business,
        email,
        phone,
        city,
        requirements,
        products: JSON.stringify(zohoProducts),
        agree,
      },
    ]);

    if (error) {
      console.error('DB Error:', error);
      return NextResponse.json({ success: false, message: 'Database insert failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
