export interface Answer {
    answer: string;
    points: number;
}

export interface Question {
    question: string,
    answers: Answer[]
}

export const questionnaire = [
  {
    question: 'How did you feel after waking up today?',
    answers: [
      {
        answer: 'Excited about today',
        points: 4
      },
      {
        answer: 'Calm and relaxed',
        points: 3
      },
      {
        answer: 'Tired',
        points: 2
      },
      {
        answer: 'Stressed and anxious',
        points: 1
      }
    ]
  },
  {
    question: "What was your first thought after coming to work?",
    answers: [
      {
        answer: 'I was looking forward to meeting my colleagues',
        points: 4
      },
      {
        answer: 'I was determined to be productive',
        points: 3
      },
      {
        answer: 'I wanted this day to end as soon as possible',
        points: 2
      },
      {
        answer: 'I wanted to go home immediately',
        points: 1
      }
    ]
  },
  {
    question:  "How do you feel like after completing your daily tasks?",
    answers: [
      {
        answer: 'I am satisfied with my work',
        points: 4
      },
      {
        answer: 'I am happy that I finished everything',
        points: 3
      },
      {
        answer: 'I feel tired and want to relax immediately',
        points: 2
      },
      {
        answer: 'I feel exhausted and depressed',
        points: 1
      }
    ]
  },
  {
    question:  "Can you relax after a difficult day?",
    answers: [
      {
        answer: 'Yes, I relax by doing the things I love',
        points: 4
      },
      {
        answer: 'Most of the time',
        points: 3
      },
      {
        answer: 'I find it difficult to relax',
        points: 2
      },
      {
        answer: 'Never, I feel like I am not doing my job well',
        points: 1
      }
    ]
  },
  {
    question:  "What do you do after you come home from work? ",
    answers: [
      {
        answer: 'I relax and get ready for the next day',
        points: 4
      },
      {
        answer: 'I rest',
        points: 3
      },
      {
        answer: 'I try to unwind but I get stressed about tomorrow',
        points: 2
      },
      {
        answer: 'I worry about the next day',
        points: 1
      }
    ]
  },
  
  {
    question:  "How often do you think about work?",
    answers: [
      {
        answer: 'During my work hours and only sometimes at home',
        points: 4
      },
      {
        answer: 'I think about work at home and during my work hours',
        points: 3
      },
      {
        answer: 'Most of the time',
        points: 2
      },
      {
        answer: 'Almost constantly',
        points: 1
      }
    ]
  }
]