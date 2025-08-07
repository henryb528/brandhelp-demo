import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BrandHelp - Automated Store Marketing</title>
      </Head>
      <main>
        <h1>🚀 Welcome to BrandHelp</h1>
        <p>This is a prototype that automatically promotes your listings from online shops like Depop.</p>
        <p>Mock store: <strong>@dolphinvntg</strong></p>
        <button onClick={() => alert('🤖 AI posting started (mock)!')}>Start Automation</button>
      </main>
    </div>
  );
}
