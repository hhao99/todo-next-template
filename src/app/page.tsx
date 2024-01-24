import { Link } from 'next'
export default function Home() {
  return (
    <main>
      <h1>Todo Demo App</h1>
      <h3><Link href='/table'>The Table demo</Link></h3>
      <h3><Link href='/todo'>The Table demo</Link></h3>
    </main>
    
  );
}
