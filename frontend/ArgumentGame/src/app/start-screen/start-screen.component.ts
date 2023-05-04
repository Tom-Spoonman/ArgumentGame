import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  userName: string = '';
  userEmail: string = ''; // Remove this line if you don't want user authentication.

  constructor(
    private router: Router,
    private userService: UserService,
    private matchService: MatchService
  ) {}

  async startNewMatch() {
    // Uncomment the following line if you want user authentication.
    // await this.userService.login(this.userEmail);

    const matchId = await this.matchService.createMatch(this.userName);
    this.router.navigate(['/match', matchId]);
  }

  async joinExistingMatch() {
    // Uncomment the following line if you want user authentication.
    // await this.userService.login(this.userEmail);

    // Replace 'matchId' with the actual match ID the user wants to join.
    // You can implement a method to get the match ID from the user.
    const matchId = 'some-match-id';
    const isJoined = await this.matchService.joinMatch(this.userName, matchId);

    if (isJoined) {
      this.router.navigate(['/match', matchId]);
    } else {
      // Show an error message if the user cannot join the match.
      // You can implement a method to display the error message.
      console.error('Failed to join the match');
    }
  }
}
