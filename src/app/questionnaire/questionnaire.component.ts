import { Component, OnInit } from '@angular/core';

import { questionnaire } from '../questionnaire';
@Component({
	selector: 'app-questionnaire',
	templateUrl: './questionnaire.component.html',
	styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
	questions = questionnaire;
	completed = false;
	result = ''
	points: number[] = new Array(this.questions.length).fill(0, 0)
	constructor() { }

	ngOnInit(): void {
	}

	addPoints(index: number, value: number) {
		this.points[index] = value;
		if(this.points.every(p => p > 0)) {
			this.completed = true;
		}
	}

	onSubmit(e: any) {
		e.preventDefault()
		let score = 0
		for (let i = 0; i < this.points.length; i++) {
			score += this.points[i]
		}
		console.log(score)
		if (score < 10) {
			this.result = "You are feeling terrible today. You should rest."
		} else if (score < 20) {
			this.result = "You are having a bad day."
		} else if (score < 30) {
			this.result = "You are feeling fine."
		} else {
			this.result = "You are having a great day. Keep up the good work!"
		}
	}
}
