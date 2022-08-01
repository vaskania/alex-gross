import { IQuestion } from "../components/Question";

export const questions: IQuestion[] = [
  {
    body: "How often do you visit this website?",
    type: "select",
    question: 1,
    answers: [
      { label: "Often", value: "often", point: 5 },
      { label: "Rarely", value: "rarely", point: 3 },
      { label: "Never", value: "never", point: 0 },
    ],
  },
  {
    body: "Please select at least one option",
    type: "multiselect",
    question: 2,
    answers: [
      { label: "Option 1", value: "opt1", point: 2 },
      { label: "Option 2", value: "opt2", point: 2 },
      { label: "Option 3", value: "opt3", point: 2 },
    ],
  },
  {
    body: "Where are you from?",
    type: "dropdown",
    question: 3,
    answers: [
      { label: "Germany", value: "ger", point: 3 },
      { label: "Sweden", value: "swe", point: 5 },
      { label: "Italy", value: "it", point: 5 },
      { label: "Spain", value: "esp", point: 3 },
    ],
  },
];
