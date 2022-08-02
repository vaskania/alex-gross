import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../components/Button";
import {Question} from "../components/Question";
import {Tracker} from "../components/Tracker";
import {AppContext} from "../context/App.context";
import {questions} from "../data/data";

export const Questions = () => {
    const [current, setCurrent] = useState<number>(0);
    const navigate = useNavigate();
    const ctx = useContext(AppContext);

    const handleClickBack = () => setCurrent((c) => c - 1)
    const handleClickNextOrFinish = () => {
        if (current >= 2) return navigate("/result");
        if (current === 2) return;
        setCurrent((c) => c + 1);
    }

    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
            }}
        >
      <span
          style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "0.8rem",
          }}
      >
        SURVEY FOR: {ctx?.name.name.toUpperCase()}
      </span>
            <Question {...questions[current]} />

            <Button
                label={current >= 2 ? "finish" : "next"}
                size={10}
                rightArrow
                onClick={handleClickNextOrFinish}
            />

            <Button
                label="back"
                size={10}
                leftArrow
                disabled={current < 1}
                transparent
                onClick={handleClickBack}
            />

            <Tracker current={current + 1} total={questions.length}/>
        </section>
    );
};
