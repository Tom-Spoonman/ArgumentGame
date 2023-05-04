import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-screen',
  templateUrl: './match-screen.component.html',
  styleUrls: ['./match-screen.component.scss'],
})
export class MatchScreenComponent implements OnInit {
  argument = 'This is a sample argument with multiple statements for testing purposes.';
  selectedText = '';
  agreeDisabled = true;
  disagreeDisabled = true;
  proposeChangeDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  onTextSelected(event: MouseEvent): void {
    const selection = window.getSelection();
    this.selectedText = selection?.toString() || '';

    this.updateActionButtons();
  }

  updateActionButtons(): void {
    const hasSelection = this.selectedText.length > 0;
    this.agreeDisabled = !hasSelection;
    this.disagreeDisabled = !hasSelection;
    this.proposeChangeDisabled = !hasSelection;
  }

  onAgree(): void {
    // Implement the agree action
  }

  onDisagree(): void {
    // Implement the disagree action
  }

  onProposeChange(): void {
    // Implement the propose change action
  }

  onCommitChanges(): void {
    // Implement the commit changes action
  }
}
