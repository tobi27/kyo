import { UserProfile } from '../types';

const API_BASE = '/api';

export async function fetchUserProfile(accessToken: string): Promise<UserProfile | null> {
  try {
    const response = await fetch(`${API_BASE}/user/profile`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch profile');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export async function syncUser(accessToken: string): Promise<UserProfile | null> {
  try {
    const response = await fetch(`${API_BASE}/user/sync`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to sync user');
    }

    return response.json();
  } catch (error) {
    console.error('Error syncing user:', error);
    return null;
  }
}
