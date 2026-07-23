import { PageShell } from "@/components/PageShell";
import { WaitlistButton, WaitlistModal } from "@/components/WaitlistModal";
import { ProblemForm } from "@/components/ProblemForm";
import { products } from "@/lib/products";

export const metadata = { title: "Vordali Labs" };

export default async function LabsPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const params = await searchParams;
  const initialProduct = ["approve", "follow", "verify"].includes(params.product || "") ? params.product : undefined;
  return (
    <PageShell>
      <main className="platform-page">
        <section className="platform-hero labs-hero">
          <p className="kicker">Vordali Labs</p>
          <h1>Do not submit a feature.<br /><em>Submit the problem.</em></h1>
          <p>Customer pain—not internal excitement—decides what earns a place on the Vordali roadmap.</p>
        </section>
        <section className="labs-grid">
          {products.filter(p => p.status === "Research").map(product => (
            <article className={`lab-card ${product.accent}`} key={product.slug}>
              <span>Research</span><h2>{product.name}™</h2><h3>{product.tagline}</h3><p>{product.description}</p>
              <WaitlistButton product={product.slug}>Join Waitlist</WaitlistButton>
            </article>
          ))}
        </section>
        <section className="problem-form-section" id="submit-problem">
          <div><p className="kicker">Problem submission</p><h2>What is frustrating your business?</h2><p>Describe the operational problem, what it costs, and how often it happens. Repeated patterns become product research.</p></div>
          <ProblemForm />
        </section>
      </main>
      <WaitlistModal initialProduct={initialProduct} />
    </PageShell>
  );
}
