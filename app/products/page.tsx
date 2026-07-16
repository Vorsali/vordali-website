import { PageShell } from "@/components/PageShell";
import { WaitlistButton, WaitlistModal } from "@/components/WaitlistModal";
import { products } from "@/lib/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="platform-page">
        <section className="platform-hero">
          <p className="kicker">Vordali Products</p>
          <h1>One product.<br /><em>One measurable problem.</em></h1>
          <p>Commit is live. Future products stay in research until businesses prove the problem is painful enough to solve.</p>
        </section>
        <section className="product-page-grid">
          {products.map((product, index) => (
            <article className={`product-card ${product.accent}`} key={product.slug}>
              <div className="product-status">{product.status}</div>
              <div className="product-number">0{index + 1}</div>
              <h2>{product.name}™</h2>
              <h3>{product.tagline}</h3>
              <p>{product.description}</p>
              <small><strong>Best fit:</strong> {product.ideal}</small>
              <div className="product-actions">
                {product.slug === "commit"
                  ? <a className="button button-primary" href="https://commit.vordali.com/login">Launch Commit <span>→</span></a>
                  : <WaitlistButton product={product.slug}>Join {product.name} Waitlist</WaitlistButton>}
              </div>
            </article>
          ))}
        </section>
        <section className="platform-principle">
          <div><p className="kicker">The product admission test</p><h2>We do not build because we can.</h2></div>
          <ol>
            <li><strong>Painful</strong><span>The problem must meaningfully cost time, money, customers, or trust.</span></li>
            <li><strong>Measurable</strong><span>The business must be able to see the value created.</span></li>
            <li><strong>Focused</strong><span>The product should solve the problem without becoming an everything app.</span></li>
            <li><strong>Natural</strong><span>It should fit beside the business’s existing systems and workflow.</span></li>
          </ol>
        </section>
      </main>
      <WaitlistModal />
    </PageShell>
  );
}
