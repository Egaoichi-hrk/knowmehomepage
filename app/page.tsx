'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const shapesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      shapesRef.current.forEach((el, idx) => {
        if (el) {
          const speed = (idx + 1) * 0.3; // slower
          const offsetX = Math.sin(scrollY * 0.005 + idx) * 40; // less horizontal
          const rotation = scrollY * 0.4 + idx * 30; // gentler rotate
          const scale = 1 + Math.sin(scrollY * 0.003 + idx) * 0.1; // smaller scaling
          el.style.transform = `translateY(${scrollY * speed}px) translateX(${offsetX}px) rotate(${rotation}deg) scale(${scale})`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // per-character fade effect removed — no IntersectionObserver for text

  return (
    <div className="min-h-screen relative">
      <div className="scroll-bg">
        {[...Array(7)].map((_, idx) => (
          <div
            key={idx}
            ref={(el) => {
              shapesRef.current[idx] = el;
            }}
            className={`scroll-shape shape${idx + 1}`}
          />
        ))}
      </div>

      <header className="relative z-10 text-center py-16 sm:py-20">
        <h1 className="text-3xl sm:text-5xl font-bold mt-12 mb-12">Know Me !</h1>
        <p className="mt-24 sm:mt-48 text-lg sm:text-xl text-gray-600">あなたの自己紹介カードをシェアしよう</p>
        <a
          href="https://geekcamp14.vercel.app"
          className="inline-block mt-12 sm:mt-18 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#36A89A' }}
        >
          今すぐはじめる
        </a>
      </header>
      <main className="relative z-10 text-center ">
        <p className="mt-12 sm:mt-18 text-xl sm:text-2xl text-gray-600">新しいコミュニティ毎に自己紹介カードを書く必要はありません
        </p>
        <section className="my-12 sm:my-20 px-4 sm:px-8 lg:px-48 py-12 sm:py-24">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-12 sm:mb-18">Service</h2>
          <p className="text-lg sm:text-2xl text-gray-700">簡単な自己紹介カードをオンライン上に作成しURL化することで、多様なSNSコミュニティに共有できます</p>
        </section>
       {/* イメージセクション */}
      <section className="service-content">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Image</h2>
          <div className="mx-auto w-40 sm:w-64 phone-frame">
            <div className="phone-screen">
              <Image
                src="/unnamed.png"
                alt="サービスイメージ"
                width={256}
                height={256}
                className="phone-content"
              />
            </div>
          </div>
        </div>
      </section>
      <a
          href="https://geekcamp14.vercel.app"
          className="inline-block mt-24 sm:mt-32 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: '#36A89A' }}
        >
          →  今すぐはじめる
        </a>
        <div className="mt-24 sm:mt-48 bg-gray-500"></div>
      </main>

      {/* SNS掲載セクション */}
      <footer className="bg-gray-600 py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" aria-label="Twitter" className="text-white hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="text-white hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <hr className="mt-6 border-t-1 border-gray-300 w-24 sm:w-48 mx-auto" />
          <p className='text-white mt-6 text-sm'>LANGUAGE:JPANESE</p>
          <p className="mt-4 text-sm text-gray-400">© 2026 Know Me. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
