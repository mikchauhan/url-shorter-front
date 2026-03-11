import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-analytics',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './url-analytics.component.html',
  styleUrl: './url-analytics.component.css'
})
export class UrlAnalyticsComponent {

shortCode = '';
  analytics: any;
  loading = false;
  error = '';

  constructor(private apiService: ApiService) {}

  fetchAnalytics() {
    this.loading = true;
    this.error = '';
    this.analytics = null;

    this.apiService.getAnalytics(this.shortCode).subscribe({
      next: (data) => {
        this.analytics = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'URL not found';
        this.loading = false;
      },
    });
  }
}