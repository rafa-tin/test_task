export default function RenderInfo({info, passedTests, profileData, avgScore}) {
  function renderInfo() {
    if (info == "about") {
      return (
        <div>
          <h1>
            Full Name: {profileData.name} {profileData.surname}
          </h1>
          <h2>Number: {profileData.number}</h2>
          <h2>Gender: {profileData.gender}</h2>
          <h2>Age: {profileData.age}</h2>
          <h2>Adress: {profileData.country + ", " + profileData.city} </h2>
          <h2>Tariff: {profileData.tariff}</h2>
        </div>
      );
    } else if (info == "local") {
      return (
        <div>
          <h2>Mail: {profileData.mail}</h2>
          <h2>Password: {profileData.password}</h2>
        </div>
      );
    } else if (info == "progress") {
      return (
        <div>
          <h1>Nmber of completed tests: {passedTests.length}</h1>
          <h1>Average Score: {avgScore}</h1>
          <ul>
            <h1>Your completed tests</h1>
            {passedTests.map((item) => (
              <li>
                <h1>{item.testName}: </h1>
                <p>
                  {item.correctAnwers}/{item.questions}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div >Chose Option</div>;
    }
  }

  return <div className="ml-[20px]">{renderInfo()}</div>;
}
