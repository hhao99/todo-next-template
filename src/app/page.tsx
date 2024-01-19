"use client"

import TodoApp from '@/app/todo'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodoApp />
    </main>
  );
}
