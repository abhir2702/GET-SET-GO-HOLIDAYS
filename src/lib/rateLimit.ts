import { rateLimits } from '@/config/env';

interface RateLimitStore {
  attempts: number;
  windowStart: number;
}

class RateLimiter {
  private store: Map<string, RateLimitStore>;

  constructor() {
    this.store = new Map();
  }

  checkLimit(key: string): boolean {
    const now = Date.now();
    const record = this.store.get(key);

    if (!record) {
      this.store.set(key, { attempts: 1, windowStart: now });
      return true;
    }

    if (now - record.windowStart > rateLimits.formSubmission.windowMs) {
      // Reset window
      this.store.set(key, { attempts: 1, windowStart: now });
      return true;
    }

    if (record.attempts >= rateLimits.formSubmission.maxAttempts) {
      return false;
    }

    record.attempts++;
    return true;
  }

  clear(key: string): void {
    this.store.delete(key);
  }
}

// Create a singleton instance
export const rateLimiter = new RateLimiter();