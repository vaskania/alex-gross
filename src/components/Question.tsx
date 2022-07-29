import { Radio } from "./Radio";

type QuestionType = "multiselect" | "select" | "dropdown";

type Answer = {
  label: string;
  value: string;
  point: number;
};

interface IQuestion {
  type: QuestionType;
  body: string;
  answers: Answer[];
  question: number;
}

export const Question = ({ answers, body, type, question }: IQuestion) => {
  return (
    <section>
      <p>QUESTION {question}</p>
      <h1>{body}</h1>
      {type === "select" ? (
        <Radio data={answers} onChange={(e) => console.log(e.target.value)} />
      ) : (
        ""
      )}
    </section>
  );
};
