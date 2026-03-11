import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CountdownPipe } from '../../pipes/countdown.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule, CountdownPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  originalUrl = '';
  customAlias = '';
  expiresInDays?: number;
  expiresOnText:string = '';
  shortUrl = '';
  error = '';
  loading = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private apiService: ApiService) { }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  showToastMessage(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortUrl);
    this.showToastMessage('Copied to clipboard', 'success');
  }

  shortenUrl() {
    if (!this.originalUrl.trim()) return;

    // Prevent negative or zero expiration
    if (this.expiresInDays && this.expiresInDays < 1) {
      this.error = 'Expiration days must be at least 1';
      return;
    }

    this.loading = true;
    this.error = '';

    this.apiService.shortenUrl({
      originalUrl: this.originalUrl,
      customAlias: this.customAlias?.trim() || undefined,
      expiresInDays: this.expiresInDays || undefined,
    }).subscribe({
      next: (res: any) => {
        this.shortUrl = res.shortUrl;
        this.expiresOnText = res.expiresAt;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Something went wrong';
        this.loading = false;
      }
    });
  }
 


}