import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;
  private wsUrl = 'wss://your-websocket-url.com'; // Replace with your actual WebSocket URL.

  constructor() {}

  connect(matchId: string) {
    if (this.socket$) {
      this.socket$.complete();
    }

    this.socket$ = webSocket(`${this.wsUrl}/matches/${matchId}`);

    // Subscribe to incoming messages.
    this.socket$.subscribe(
      (message) => {
        console.log('Received message:', message);
        // Handle the incoming message as needed.
      },
      (error) => console.error('WebSocket error:', error),
      () => console.log('WebSocket closed')
    );
  }

  // Implement other WebSocket-related methods here, such as sending messages, handling disconnects, etc.
}
