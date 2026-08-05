import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRoot } from './app/app.root';

bootstrapApplication(AppRoot, appConfig)
  .catch((err) => console.error(err));


export function back() {
  window.history.back();
}

export async function read_email_template(templateName: string): Promise<string> {
  const response = await fetch(`/assets/${templateName}.html`);
  if (!response.ok) {
    throw new Error(`Failed to load email template: ${templateName}`);
  }
  return response.text();
}
