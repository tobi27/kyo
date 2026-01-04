import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Check, Loader2 } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import { createCheckoutSession } from '../lib/stripe';

const Pricing: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  const handleSelectPlan = async (tier: typeof PRICING_TIERS[0]) => {
    if (tier.mode === 'contact') {
      // Open contact/email for Enterprise
      window.location.href = 'mailto:sales@xigate.com?subject=Enterprise%20Inquiry';
      return;
    }

    if (!isAuthenticated) {
      // Redirect to login first
      loginWithRedirect({
        appState: { returnTo: window.location.pathname + '#pricing' }
      });
      return;
    }

    if (!tier.priceId) {
      console.error('No price ID configured for this tier');
      return;
    }

    setLoadingTier(tier.id);

    try {
      const token = await getAccessTokenSilently();
      const result = await createCheckoutSession(
        tier.priceId,
        tier.mode as 'subscription' | 'payment',
        token
      );

      if ('url' in result && result.url) {
        window.location.href = result.url;
      } else if ('error' in result) {
        console.error('Checkout error:', result.error);
        alert('Failed to start checkout. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to start checkout. Please try again.');
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Predictable Unit Economics</h2>
          <p className="text-slate-400">Scale your agent fleet with complete financial visibility.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col p-8 rounded-2xl border ${tier.highlight ? 'border-blue-500/50 bg-slate-900 shadow-2xl shadow-blue-900/20' : 'border-slate-800 bg-slate-900/30'}`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-slate-400 text-sm h-10 mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-slate-500 ml-1">{tier.period}</span>
              </div>

              <div className="space-y-4 flex-1 mb-8">
                {tier.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-300 text-sm">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleSelectPlan(tier)}
                disabled={loadingTier === tier.id}
                className={`w-full py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  tier.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {loadingTier === tier.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  tier.cta
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
