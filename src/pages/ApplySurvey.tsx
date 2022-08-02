import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {AppContext} from "../context/App.context";
import classes from "../styles/applySurvey.module.css";

export const ApplySurvey = () => {
    const [name, setName] = useState<string>("");
    const ctx = useContext(AppContext);

    const navigate = useNavigate();
    const handleClickBack = () => navigate('/')
    const handleClickNext = () => {
        ctx?.name.setName(name);
        navigate("/questions");
    }

    return (
        <section className={classes.apply}>
            <h6>WHO ARE YOU?</h6>
            <h1>Please enter your name</h1>
            <Input
                onChange={({target: {value}}) => setName(value)}
                placeholder="John Doe"
                type="text"
            />

            <Button
                label="NEXT"
                rightArrow
                size={10}
                onClick={handleClickNext}
                disabled={!name.trim().length}
            />
            <Button
                label="BACK"
                leftArrow
                transparent
                size={10}
                onClick={handleClickBack}
            />
        </section>
    );
};
