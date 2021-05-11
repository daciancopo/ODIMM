import './App.css';
import courses from "./images/Courses.png";
import users from "./images/Users.png";
import articles from "./images/Articles.png";
import trophy from "./images/Trophy.png";
import BarChartComponent from "./components/BarChartComponent"

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4 col-lg-3 col-sm-10 ml-4 mb-3 cards-style">
          <div className="mb-3 mt-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex">

                <div className="trophy-image d-flex align-items-center justify-content-center">
                  <img src={trophy} alt="Trophy"></img>
                </div>
                <h4 className="ml-3">Curaj !</h4>
              </div>
              <button className="btn button-ok">OK</button>
            </div>
          </div>
          <p>Mai ai 100 de puncte<br></br> pana la urmatorul nivel !</p>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 d-flex ml-4 mb-3 cards-style justify-content-center">
          <div className="align-self-center">
            <div className="ml-4 mb-2 mt-4">
              <div className="courses-image d-flex align-items-center justify-content-center">
                <img src={courses} alt="Courses"></img>
              </div>
            </div>
            <p className="text-center">New courses <br></br> <h3 className="text-center">1.2 k</h3></p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 d-flex ml-4 mb-3 cards-style justify-content-center">
          <div className="align-self-center">
            <div className="ml-3 mb-2 mt-4">
              <div className="users-image d-flex align-items-center justify-content-center">
                <img src={users} alt="Users"></img>
              </div>
            </div>
            <p className="text-center">New users <br></br> <h3 className="text-center">45 k</h3></p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 ml-4 d-flex mb-3 cards-style justify-content-center">
          <div className="align-self-center">
            <div className="ml-4 mb-2 mt-4">
              <div className="articles-image d-flex align-items-center justify-content-center">
                <img src={articles} alt="Articles"></img>
              </div>
            </div>
            <p className="text-center">New articles <br></br> <h3 className="text-center">32.4 k</h3></p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-9 col-sm-10 ml-4 mb-3 chart-style ">
          <div className="mb-3 mt-3">
            <div className="d-flex justify-content-between">
              <h4>Curs :</h4>
              <select
                className="select-button w-50"
                value="Finantarea afacerii tale in timpuri de pandemie"
              >
                <option defaultValue="Finantarea afacerii tale in timpuri de pandemie">Finantarea afacerii tale in timpuri de pandemie</option>
              </select>
            </div>
          </div>
          <div className="chart">
            <BarChartComponent />
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
