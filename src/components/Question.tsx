import {useContext} from "react";
import {AppContext} from "../context/App.context";
import {Dropdown} from "./Dropdown";
import {MultiSelect} from "./MultiSelect";
import {Select} from "./Radio";
import classes from "../styles/question.module.css";

export type QuestionType = "multiselect" | "select" | "dropdown";

export type Answer = {
    label: string;
    value: string;
    point: number;
};

export interface IQuestion {
    type: QuestionType;
    body: string;
    answers: Answer[];
    question: number;
}

export const Question = ({answers, body, type, question}: IQuestion) => {
    const ctx = useContext(AppContext);

    return (
        <section className={classes.question}>
            <p>QUESTION {question}</p>
            <h1>{body}</h1>
            {type === "select" ? (
                <Select
                    data={answers}
                    onChange={(e: any) => {
                        ctx?.selectedAnswers.setAnswers({
                            point: answers.find((a) => a.value === e.target.value)
                                ?.point as number,
                            value: e.target.value,
                            type: "select",
                        });
                    }}
                />
            ) : type === "multiselect" ? (
                <MultiSelect
                    data={answers}
                    onChange={(e: any) => {
                        ctx?.selectedAnswers.setAnswers({
                            point: answers.find((a) => a.value === e.target.value)
                                ?.point as number,
                            value: e.target.value,
                            type: "multiselect",
                        });
                    }}
                />
            ) : (
                <Dropdown
                    data={answers}
                    handleChange={(val: any) =>
                        ctx?.selectedAnswers.setAnswers({
                            point: answers.find((a) => a.value === val)?.point as number,
                            value: val,
                            type: "dropdown",
                        })
                    }
                />
            )}
        </section>
    );
};
