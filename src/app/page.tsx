import Link  from 'next/link'
export default function Home() {
  return (
    <main className='m-4 p-4'>
      <h1 className='text-3xl text-center'>Todo Demo App</h1>
      <h3><Link href='/table'>The Table demo</Link></h3>
      <h3><Link href='/todo'>The Todo demo</Link></h3>
    </main>
    
  );
}
