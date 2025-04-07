// CSRF Token Management
class CSRFProtection {
  private token: string | null = null;

  generateToken(): string {
    const random = new Uint8Array(32);
    crypto.getRandomValues(random);
    this.token = btoa(String.fromCharCode(...random));
    return this.token;
  }

  getToken(): string {
    return this.token || this.generateToken();
  }

  validateToken(token: string): boolean {
    return token === this.token;
  }
}

export const csrfProtection = new CSRFProtection();