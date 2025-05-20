import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';

export default function MobileHeader() {
  return (
    <div className='[@media(min-width:890px)]:hidden fixed top-9 left-9'>
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>
              <div className='flex justify-center'>
                <Image
                  src='/favicon.ico'
                  alt='company logo'
                  width={30}
                  height={30}
                />
              </div>
            </SheetTitle>
            <SheetDescription>
              {links.map((link) => (
                <Link
                  className='flex w-full items-center justify-center px-3 py-3 text-gray-500 hover:text-gray-950 hover:bg-gray-100 transition dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-800 rounded-full'
                  href={link.hash}
                  key={link.hash}
                >
                  {link.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
