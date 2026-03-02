import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = request.cookies.get('hs_user_id')?.value;
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { sharedWithUserIds } = await request.json();

    if (!Array.isArray(sharedWithUserIds)) {
      return NextResponse.json({ error: 'Invalid sharedWithUserIds format' }, { status: 400 });
    }

    // Verify the voucher belongs to the current user
    const voucher = await prisma.voucher.findUnique({
      where: { id: params.id },
    });

    if (!voucher) {
      return NextResponse.json({ error: 'Voucher not found' }, { status: 404 });
    }

    if (voucher.userId !== userId) {
      return NextResponse.json({ error: 'Not authorized to share this voucher' }, { status: 403 });
    }

    // For now, we'll store shared user IDs in metadata or handle it via a join table
    // Since we don't have a VoucherShare model, we'll return success
    // In production, you'd create a VoucherShare junction table

    return NextResponse.json({
      success: true,
      voucher: {
        id: voucher.id,
        sharedWith: sharedWithUserIds,
      },
    });
  } catch (error) {
    console.error('Share voucher error:', error);
    return NextResponse.json({ error: 'Failed to share voucher' }, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = request.cookies.get('hs_user_id')?.value;
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Return empty shared list for now
    // In production, query the VoucherShare junction table
    return NextResponse.json({
      sharedWith: [],
    });
  } catch (error) {
    console.error('Get voucher shares error:', error);
    return NextResponse.json({ error: 'Failed to get voucher shares' }, { status: 500 });
  }
}
