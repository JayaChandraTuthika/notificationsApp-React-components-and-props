const Notification = (props) => {
  const { color, text, url } = props;
  return (
    <p className={`button ${color}`}>
      <img src={`${url}`} className="icon" />
      {text} Message
    </p>
  );
};
const url1 = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const url2 = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const url3 = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const url4 = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";
const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <p></p>
    <div className="inner">
      <Notification color="blue" text="Information" url={`${url1}`} />
      <Notification color="green" text="Success" url={`${url2}`} />
      <Notification color="yellow" text="Warning" url={`${url3}`} />
      <Notification color="red" text="Error" url={`${url4}`} />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
