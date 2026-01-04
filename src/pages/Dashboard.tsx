import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CreditCard, Settings, ExternalLink, Loader2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { fetchUserProfile, syncUser } from '../lib/api';
import { createPortalSession } from '../lib/stripe';
import { UserProfile } from '../types';

const Dashboard: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = await getAccessTokenSilently();
        let userProfile = await fetchUserProfile(token);

        if (!userProfile) {
          userProfile = await syncUser(token);
        }

        setProfile(userProfile);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [getAccessTokenSilently]);

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const result = await createPortalSession(token);

      if ('url' in result && result.url) {
        window.location.href = result.url;
      } else if ('error' in result) {
        alert('Failed to open billing portal: ' + result.error);
      }
    } catch (error) {
      console.error('Error opening portal:', error);
      alert('Failed to open billing portal');
    } finally {
      setPortalLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
      case 'one_time_paid':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'past_due':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'canceled':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'one_time_paid':
        return 'Paid';
      case 'past_due':
        return 'Past Due';
      case 'canceled':
        return 'Canceled';
      default:
        return status;
    }
  };

  const getPlanLabel = (plan: string) => {
    switch (plan) {
      case 'standard':
        return 'Standard Plan';
      case 'design_partner':
        return 'Design Partner';
      default:
        return plan;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">Welcome back, {user?.name || user?.email}</p>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            {user?.picture ? (
              <img src={user.picture} alt="" className="w-16 h-16 rounded-full" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-2xl text-white">{user?.name?.[0] || user?.email?.[0]}</span>
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold text-white">{user?.name || 'User'}</h2>
              <p className="text-slate-400 text-sm">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Subscriptions
            </h3>
            <button
              onClick={handleManageSubscription}
              disabled={portalLoading}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-white transition-colors disabled:opacity-50"
            >
              {portalLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Settings className="w-4 h-4" />
              )}
              Manage Billing
            </button>
          </div>

          {profile?.subscriptions && profile.subscriptions.length > 0 ? (
            <div className="space-y-4">
              {profile.subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(sub.status)}
                    <div>
                      <p className="text-white font-medium">{getPlanLabel(sub.plan)}</p>
                      <p className="text-slate-400 text-sm">
                        Status: {getStatusLabel(sub.status)}
                        {sub.currentPeriodEnd && (
                          <span> &bull; Renews {new Date(sub.currentPeriodEnd).toLocaleDateString()}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-400 mb-4">No active subscriptions</p>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors"
              >
                View Plans
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-900 transition-colors"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <ExternalLink className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-white font-medium">Documentation</h4>
              <p className="text-slate-400 text-sm">Learn how to integrate XiGate</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-900 transition-colors"
          >
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <Settings className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h4 className="text-white font-medium">API Keys</h4>
              <p className="text-slate-400 text-sm">Manage your API credentials</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
