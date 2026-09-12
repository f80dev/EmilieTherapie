import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRoot } from './app/app.root';

bootstrapApplication(AppRoot, appConfig)
  .catch((err) => console.error(err));


export function back() {
  window.history.back();
}


export function dateToStr(dt:Date) : string {
  return dt.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export async function read_email_template(templateName: string,body:any=null): Promise<string> {
  const response = await fetch(`/assets/${templateName}.html`);
  if (!response.ok) {
    throw new Error(`Failed to load email template: ${templateName}`);
  }
  let template = await response.text();
  if(body){
    for(let k in body){
      template=template.replace("{"+k+"}",body[k])
    }
  }
  return template;
}
