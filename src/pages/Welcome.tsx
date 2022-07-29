import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import classes from "../styles/welcome.module.css";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <section className={classes.welcome}>
      <h1>Welcome to our Survey.</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nisi
        dolores eligendi nostrum accusantium in consequatur, deleniti doloremque
        tempore quis. Earum, quos. Ipsum repellendus a ducimus quia neque velit
        et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vel,
        porro autem cupiditate dolorem sit est neque officia consectetur
        officiis laudantium et, explicabo aliquam exercitationem animi quisquam!
        Illo, dignissimos eum.
      </p>
      <Button
        label="start the survey"
        size={15}
        rightArrow
        onClick={() => navigate("apply")}
      />
    </section>
  );
};
