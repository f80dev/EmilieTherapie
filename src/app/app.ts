import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import * as packageJson from '../../package.json';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { VerticalCard } from './vertical-card/vertical-card';
import { ScreenService } from './screen.service';
import { AnalyticsService } from './analytics.service';

interface BusySlot {
  time: string;
  duration: number;
}

export interface Faq {
  id: number;
  question: string;
  reponse: string;
  icon: string;
}

interface UserContactData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

const LOCALSTORAGE_KEY = 'emilie_therapie_user_data';
const SITE_VERSION = packageJson.version;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    VerticalCard,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  protected screenService = inject(ScreenService);
  protected analytics = inject(AnalyticsService);

  protected readonly title = signal('Psychothérapie');
  protected readonly siteVersion = SITE_VERSION;

  // Form fields
  nom = signal('');
  prenom = signal('');
  email = signal('');
  telephone = signal('');
  message = signal('');
  selectedDate = signal<Date | null>(null);
  selectedTime = signal<string>('');
  seanceType = signal<'distant' | 'presentiel'>('presentiel');
  isMobileMenuOpen = signal(false);
  acceptTerms = signal(false);

  // 75-minute slots from 8h to 20h (last start at 18h45 for a 75min session ending at 20h)
  timeSlots: string[] = [
    '08:00',
    '09:15',
    '10:30',
    '11:45',
    '13:00',
    '14:15',
    '15:30',
    '16:45',
    '18:00',
    '19:15',
  ];

  // Busy slots fetched from Google Calendar: date string → busy slots for that day
  busySlots = signal<Map<string, BusySlot[]>>(new Map());

  // Loading state for calendar
  loadingSlots = signal(false);

  // FAQs loaded from JSON
  faqs: Faq[] = [];

  methodPrinciples = [
    {
      icon: 'favorite',
      title: "L'Intelligence Relationnelle® (IR)",
      description:
        'Approche neurobiologique à la fois profonde (par son action sur le système nerveux) et douce (par la sécurité que la co-régulation instaure)',
      description_back:
        "L'IR® s\'appuie sur 3 fondements scientifiques pour reconfigurer le système nerveux autonome, c'est-à-dire ramener de l'apaisement et de la souplesse, là où le trauma a créé de la rigidité : - la théorie de l'attachement ou comment, à travers une proximité thérapeutique sécure, le praticien vous propose de vivre une expérience correctrice et de réparer - en vous - les zones d'insécurité affective et relationnelle ; - la théorie polyvagale pour vous apprendre à repérer, apprivoiser et recalibrer ensemble les réactions automatiques de votre système nerveux, face au danger ; - le modèle IFS (système familial intérieur) ou \"travail avec les Parts\", pour dialoguer avec bienveillance et douceur avec vos différentes \"voix intérieures\" (celles qui portent les blessures et celles qui s'épuisent à les protéger) et retrouver un sentiment de paix intérieure",
    },
    {
      icon: 'psychology',
      title: "L'EMDR et les ressources de stabilisation",
      description:
        'Approche de désensibilisation et de retraitement des souvenirs traumatiques, par les mouvements oculaires',
      description_back:
        "Le traumatisme, ça n'est pas tant l'évènement en lui-même que votre vécu d'une insécurité extrême, au moment où il s'est produit. En situation de grand danger, le cerveau humain peut aller jusqu'à \"dysjoncter\" et empêcher ce vécu traumatique d'être \"digéré\". L'EMDR a pour objectif de relancer le processus naturel de guérison du psychisme, en permettant à votre vécu - bloqué dans la mémoire traumatique - de rejoindre la mémoire autobiographique... et d'être ainsi classé dans vos \"archives personnelles\". Les outils d'ancrage et les techniques de stabilisation émotionnelle sont autant de ressources (ou \"filets de sécurité\") pour accompagner ce processus",
    },
    {
      icon: 'self_improvement',
      title: 'La THERAPIE SENSORI-MOTRICE',
      description:
        "Approche somatique qui utilise le corps comme ressource principale d'informations et de changements",
      description_back:
        "Car là où la parole s\'arrête, le corps - lui -  se souvient. Ainsi, vos blessures profondes et vos carences s'inscrivent dans la mémoire implicite, sous la forme de tensions, micro-expressions, postures ou gestes chroniques. Via une approche \"Bottom-Up\" (du corps vers l'esprit), je vous aide à décoder votre récit somatique, j'accompagne votre corps à achever les actions de défense qui ont possiblement été inhibées, et je soutiens votre régulation émotionnelle par les mouvements du corps",
    },
    {
      icon: 'link',
      title: 'Les THERAPIES COGNITIVO-COMPORTEMENTALES',
      description: 'Approche pragmatique centrée sur le ici & maintenant (ancrage)',
      description_back:
        'Les TCC permettent de modifier les pensées et comportements inadaptés en restant concentré.e sur le présent. Cette approche est idéale pour identifier la manière dont vos pensées influencent directement vos émotions, vos comportements, voire vos boucles anxieuses ou de rumination',
    },
  ];

  flippedCards: { [key: string]: boolean } = {};

  flipCard(title: string): void {
    this.flippedCards[title] = !this.flippedCards[title];
  }

  private cloudSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
  private cloudRotations = [0, 5, -5, 10, -10, 3, -3, 8, -8];
  private cloudColors = [
    '#5c6f7d',
    '#7a8fa3',
    '#4a5c6a',
    '#6b8299',
    '#8fa4b8',
    '#9eb3c4',
    '#5d7a8f',
    '#4e6d7a',
    '#6a8a9e',
    '#7d97a8',
  ];

  getCloudSize(index: number): string {
    return this.cloudSizes[index % this.cloudSizes.length];
  }

  getCloudRotation(index: number): number {
    return this.cloudRotations[index % this.cloudRotations.length];
  }

  getCloudColor(index: number): string {
    return this.cloudColors[index % this.cloudColors.length];
  }

  private router = inject(Router);

  ngOnInit() {
    // Handle redirect from 404.html for GitHub Pages SPA routing
    const redirectTo = sessionStorage.getItem('redirectTo');
    if (redirectTo && redirectTo !== '/') {
      sessionStorage.removeItem('redirectTo');
      console.log('[Router] Handling redirect to:', redirectTo);
      // Navigate using Angular Router after initialization
      this.router.navigateByUrl(redirectTo);
    }

    this.loadUserDataFromLocalStorage();
    this.loadFaqs();
  }

  private loadFaqs(): void {
    this.http.get<Faq[]>('data/faqs.json').subscribe({
      next: (data) => {
        this.faqs = data;
      },
      error: (err) => {
        console.error('Failed to load FAQs:', err);
      },
    });
  }

  private loadUserDataFromLocalStorage(): void {
    console.log('[LocalStorage] Attempting to load user data...');
    try {
      const stored = localStorage.getItem(LOCALSTORAGE_KEY);
      if (stored) {
        const data: UserContactData = JSON.parse(stored);
        console.log('[LocalStorage] Data found:', data);
        this.nom.set(data.nom || '');
        this.prenom.set(data.prenom || '');
        this.email.set(data.email || '');
        this.telephone.set(data.telephone || '');
        console.log('[LocalStorage] User data loaded successfully');
      } else {
        console.log('[LocalStorage] No stored data found');
      }
    } catch (err) {
      console.error('[LocalStorage] Failed to load user data:', err);
    }
  }

  private saveUserDataToLocalStorage(): void {
    console.log('[LocalStorage] Attempting to save user data...');
    try {
      const data: UserContactData = {
        nom: this.nom(),
        prenom: this.prenom(),
        email: this.email(),
        telephone: this.telephone(),
      };
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
      console.log('[LocalStorage] User data saved:', data);
    } catch (err) {
      console.error('[LocalStorage] Failed to save user data:', err);
    }
  }

  onContactFieldChange(): void {
    this.saveUserDataToLocalStorage();
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Analytics — tracking des sections visitées via le menu
      if (section === 'rdv') this.analytics.viewRdvSection();
    }
  }

  isSlotAvailable(time: string): boolean {
    const date = this.selectedDate();
    if (!date) return false;

    const dateStr = this.dateToString(date);
    const busy = this.busySlots().get(dateStr) || [];

    const [slotH, slotM] = time.split(':').map(Number);
    const slotStartMin = slotH * 60 + slotM;
    const slotEndMin = slotStartMin + 75;

    for (const b of busy) {
      const [bH, bM] = b.time.split(':').map(Number);
      const bStartMin = bH * 60 + bM;
      const bEndMin = bStartMin + b.duration;

      if (slotStartMin < bEndMin && slotEndMin > bStartMin) {
        return false;
      }
    }
    return true;
  }

  availableSlots(): string[] {
    return this.timeSlots.filter((s) => this.isSlotAvailable(s));
  }

  selectTimeSlot(time: string) {
    if (this.isSlotAvailable(time)) {
      this.selectedTime.set(time);
    }
  }

  isFormValid(): boolean {
    return (
      this.nom().trim().length > 0 &&
      this.prenom().trim().length > 0 &&
      this.email().trim().length > 0 &&
      this.email().includes('@') &&
      this.telephone().trim().length > 0 &&
      this.selectedDate() !== null &&
      this.selectedTime() !== '' &&
      this.acceptTerms()
    );
  }

  submitAppointment() {
    if (!this.isFormValid()) {
      this.snackBar.open('Veuillez remplir tous les champs obligatoires', 'Fermer', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    // Save user data to localStorage before submitting
    this.saveUserDataToLocalStorage();

    const date = this.selectedDate();
    const dateStr = date
      ? date.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

    const seanceTypeLabel =
      this.seanceType() === 'distant'
        ? 'À distance (visioconférence)'
        : 'En présentiel (cabinet, 12 rue Martel)';

    const taskTitle = `RDV: ${this.prenom()} ${this.nom()} — ${dateStr} à ${this.selectedTime()}`;
    const taskNotes = `Type: ${seanceTypeLabel}\nEmail: ${this.email()}\nTéléphone: ${this.telephone()}\nMessage: ${this.message()}`;

    // Calculate start and end times for calendar event
    const selectedDate = this.selectedDate();
    const selectedTime = this.selectedTime();
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const startDateTime = new Date(selectedDate);
      startDateTime.setHours(hours, minutes, 0, 0);

      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 60); // 1 hour session

      const formatDateTime = (d: Date) => d.toISOString().slice(0, 19) + '+02:00';

      // Add to Google Calendar as "à confirmer"
      this.http
        .post('/api/calendar/add-to-calendar', {
          title: taskTitle,
          start_time: formatDateTime(startDateTime),
          end_time: formatDateTime(endDateTime),
          description: taskNotes,
          email: this.email(),
          phone: this.telephone(),
          seance_type: seanceTypeLabel,
        })
        .subscribe({
          error: (err) => console.error('Failed to add calendar event:', err),
        });
    }

    const message = `Merci ${this.prenom()} ! Votre demande de rendez-vous a été envoyée.\n\nDétails :\n- Date : ${dateStr}\n- Heure : ${this.selectedTime()}\n- Type : ${seanceTypeLabel}\n\nJe vous contacterai sous 24h pour confirmer votre rendez-vous.`;

    this.snackBar.open(message, 'Fermer', {
      duration: 5000,
      panelClass: ['success-snackbar'],
    });

    // Analytics — lead capturé (home form)
    this.analytics.leadCaptured('direct');

    // Keep user contact info in localStorage, only reset appointment-specific fields
    this.message.set('');
    this.selectedDate.set(null);
    this.selectedTime.set('');
    this.seanceType.set('presentiel');
    this.acceptTerms.set(false);
  }

  getMinDate(): Date {
    return new Date();
  }

  getMaxDate(): Date {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    return date;
  }

  // Called when a date is selected in the calendar
  async onDateSelected(date: Date | null) {
    this.selectedDate.set(date);
    this.selectedTime.set('');

    if (!date) return;

    // Analytics — vue du calendrier
    this.analytics.viewCalendar();

    const day = date.getDay();
    if (day === 0) {
      // Sunday — no slots
      return;
    }

    this.loadingSlots.set(true);

    const dateStr = this.dateToString(date);
    const startStr = dateStr + 'T00:00:00Z';
    const endStr = dateStr + 'T23:59:59Z';

    try {
      const busyMap: Record<string, { time: string; duration: number }[]> =
        (await this.http
          .get<
            Record<string, { time: string; duration: number }[]>
          >(`/api/calendar/busy?start=${dateStr}&end=${dateStr}`)
          .toPromise()) || {};

      // Update busySlots signal
      const newMap = new Map<string, BusySlot[]>();
      for (const [d, slots] of Object.entries(busyMap)) {
        newMap.set(d, slots);
      }
      this.busySlots.set(newMap);
    } catch (err) {
      console.warn('Could not fetch busy slots:', err);
      this.busySlots.set(new Map());
    } finally {
      this.loadingSlots.set(false);
    }
  }

  private dateToString(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}
