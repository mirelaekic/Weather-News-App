import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getNews } from "../../store/actions/news";
import { CardActionArea } from "@material-ui/core";
import "./Next.css";
import Moment from "react-moment";
import moment from "moment"

const News: FC = () => {
  const newsData = useSelector((state: RootState) => state.news.data);
  console.log(newsData, "NEWS");
  const dispatch = useDispatch();
  window.onload = () => dispatch(getNews());

  const start = "2018-01-01T01:10:00Z";
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let cTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();
  let end = cDate + " " + cTime;
  console.log(end)
  const filterByDate = newsData?.articles.filter((article) => {
    let date = article.publishedAt;
    return date >= start && date <= end;
  });
  console.log(filterByDate);

  return (
    <Container className="mb-5">
      <Row>
        {newsData?.articles.map((a, i) => (
          <Col lg={12} key={i}>
            <div className="card mb-1 news-card" key={i}>
              <CardActionArea>
                <a className="link" href={a.url} target="_blank">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        style={{ maxWidth: "-webkit-fill-available" }}
                        src={a.urlToImage}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{a.title}</h5>
                        <p className="card-text">{a.description}</p>
                        <p className="card-text">
                          <small className="text-muted">                         
                            Last updated{" "}
                            <Moment fromNow>{a.publishedAt}</Moment>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </CardActionArea>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
