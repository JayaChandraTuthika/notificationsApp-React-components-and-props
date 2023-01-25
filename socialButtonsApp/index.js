const Button = (props) => {
  const { text, color } = props;
  return <button className={`${color}`}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="inner-container">
      <Button text="Like" color="yellow" />
      <Button text="Comment" color="white" />
      <Button text="Share" color="blue" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
