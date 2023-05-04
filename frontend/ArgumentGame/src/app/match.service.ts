import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebSocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private apiUrl = 'https://your-api-url.com'; // Replace with your actual API URL.

  constructor(
    private http: HttpClient,
    private webSocketService: WebSocketService
  ) {}

  async createMatch(userName: string): Promise<string> {
    const response = await this.http
      .post<{ matchId: string }>(`${this.apiUrl}/matches`, { userName })
      .toPromise();

    // Check if the response is defined and has a matchId property.
    if (response && response.matchId) {
      // Connect to the WebSocket server for real-time communication.
      this.webSocketService.connect(response.matchId);

      return response.matchId;
    } else {
      throw new Error('Failed to create a match.');
    }
  }

  async joinMatch(userName: string, matchId: string): Promise<boolean> {
    try {
      await this.http
        .post(`${this.apiUrl}/matches/${matchId}/join`, { userName })
        .toPromise();

      // Connect to the WebSocket server for real-time communication.
      this.webSocketService.connect(matchId);

      return true;
    } catch (error) {
      console.error('Failed to join the match:', error);
      return false;
    }
  }

  // Implement other match-related methods here, such as fetching match data, submitting turns, etc.
}
