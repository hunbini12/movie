import { Button, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import NavBar from "../NavBar/NavBar";
import AntCard from "../commons/AntCard";
import MainImage from "./Section/MainImage";

function LandingPage() {
  const navigate = useNavigate();
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const page = 1;
    axiosMovies(page);
  }, []);

  const loadMoreItems = () => {
    console.log("더보기 버튼 클릭!");
    axiosMovies(CurrentPage + 1);
  };

  return (
    <>
      <NavBar />
      <div style={{ width: "100%" }}>
        {/* Main Image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.title}
            overview={MainMovieImage.overview}
          />
        )}

        {/* 다음 버튼 */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button onClick={() => navigate(1)}>다음</Button>
        </div>

        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>새로 나온 영화</h2>

          <hr />

          {/* Movie Grid Card */}
          <Row gutter={[10, 10]}>
            {Movies.map((movie) => {
              return (
                <React.Fragment key={movie.id}>
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${movie.poster_path}`}
                    title={movie.title}
                    movieId={movie.id}
                  />
                </React.Fragment>
              );
            })}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <button onClick={loadMoreItems}> 더보기 </button>
        </div>
      </div>
    </>
  );

  function axiosMovies(page) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`;

    axios(endpoint)
      .then((response) => response.data)
      .then((response) => {
        // console.log(response.page);
        // console.log(response.results);
        console.log(response);
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setCurrentPage(response.page);
      });
  }
}

export default LandingPage;
