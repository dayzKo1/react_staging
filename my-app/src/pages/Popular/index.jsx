import React, { Component } from 'react'
import axios from "axios";
import { NavLink } from "react-router-dom";
import MyCard from "../../components/MyCard";
import Load from "../../components/Load";
import InfiniteScroll from "react-infinite-scroller";
import { Container, Row, Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [
        {
          name: "All",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E11&sort=stars&order=desc&type=Repositories&page=",
        },
        {
          name: "java",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E11+language:java&sort=stars&order=desc&type=Repositories&page=",
        },
        {
          name: "javascript",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E11+language:javascript&sort=stars&order=desc&type=Repositories&page=",
        },
        {
          name: "css",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E11+language:css&sort=stars&order=desc&type=Repositories&page=",
        },
        {
          name: "ruby",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories&page=",
        },
        {
          name: "python",
          url:
            "https://api.github.com/search/repositories?q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories&page=",
        },
      ],
      tabName: "All",
      tabUrl:
        "https://api.github.com/search/repositories?q=stars:%3E11&sort=stars&order=desc&type=Repositories&page=",
      githubData: [],
      count: 0,
      loading: true,
      pageNum: 1,
      pageTotal: 5,
      hasMore: true,
      errorContent: {},
      error: false
    };
  }
  switchTab = (e, { name, url }) => {
    let { target } = e;
    const filterOption = target.getAttribute("data-filter");
    if (filterOption) {
      document.querySelectorAll(".tab-list.active").forEach((btn) => {
        btn.classList.remove("active");
      });
      target.classList.add("active");
    }
    this.setState({
      githubData: [],
      tabName: name,
      tabUrl: url,
      pageNum: 1,
      hasMore: true,
      error: false
    });
    setTimeout(() => {
      this.FetchGit();
    }, 200);
  };

  //获得数据
  async FetchGit() {
    if (this.state.count === 0) {
      // const name = localStorage.getItem("name");
      let obj = {};
      // console.log(window.location.href);
      if (window.location.href.includes("?")) {
        let arr = window.location.href.split("?")[1].split("&");
        for (let i = 0; i < arr.length; i++) {
          let res = arr[i].split("=");
          obj[res[0]] = res[1];
        }
      }
      console.log(obj.language);
      if (obj.language) {
        try {
          const tabUrl = `https://api.github.com/search/repositories?q=stars:%3E1+language:${obj.language}&sort=stars&order=desc&type=Repositories&page=`;
          const url = tabUrl + this.state.pageNum;
          const res = await axios.get(url);
          // console.log(res);
          this.setState({
            githubData: res.data.items,
            loading: false,
            count: this.state.count + 1,
            name: obj.language,
            tabUrl: tabUrl,
            pageNum: 2,
          });
          const filterOption = document.getElementById(obj.language);
          // console.log(filterOption);
          if (filterOption) {
            document
              .querySelectorAll(".tab-list.active")
              .forEach((btn) => btn.classList.remove("active"));
            filterOption.classList.add("active");
          }
        } catch (e) {
          const errorContent = e.response.data.message;
          this.setState({
            githubData: [],
            errorContent,
            error: true,
          });
        }
      } else {
        const { pageNum, tabUrl, githubData, pageTotal } = this.state;
        if (pageNum > pageTotal) {
          this.setState({
            hasMore: false,
          });
          return;
        }
        try {
          const url = tabUrl + pageNum;
          const res = await axios.get(url);
          this.setState({
            githubData: githubData.concat(res.data.items),
            loading: false,
            pageNum: pageNum + 1,
          });
          const filterOption = document.getElementById("All");
          if (filterOption) {
            document
              .querySelectorAll(".tab-list.active")
              .forEach((btn) => btn.classList.remove("active"));
            filterOption.classList.add("active");
          }
        } catch (e) {
          const errorContent = e.response.data.message;
          this.setState({
            githubData: [],
            errorContent,
            error: true,
          });
        }
      }
    } else {
      const { pageNum, tabUrl, githubData, pageTotal } = this.state;
      if (pageNum > pageTotal) {
        this.setState({
          hasMore: false,
        });
        return;
      }
      try {
        const url = tabUrl + pageNum;
        const res = await axios.get(url)
        // console.log(res);
        this.setState({
          githubData: githubData.concat(res.data.items),
          loading: false,
          pageNum: pageNum + 1,
          error: false,
        });
      } catch (e) {
        const errorContent = e.response.data.message;
        // console.log(e.response.data.message);
        this.setState({
          githubData: [],
          errorContent,
          error: true,
        });
      }
    }
  }

  componentDidMount() {
    document.querySelectorAll(".tab-list.active").forEach((btn) => {
      btn.classList.remove("active");
    });
    this.FetchGit();
  }

  render() {
    let renderInfo;
    const { githubData, hasMore, errorContent, error } = this.state;
    renderInfo = (<div>
      <Load />
    </div>
    );
    if (githubData.length !== 0) {
      renderInfo = (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => this.FetchGit()}
          hasMore={hasMore}
          loader={
            <div key={0}>
              <div style={{ textAlign: 'center' }}>
                <Spinner animation="border" />正在查找
              </div>
            </div>
          }
        >
          <Container>
            <Row>
              {githubData.map((item, index) => {
                return (
                  <Col lg={3} md={4} sm={6}>
                    <MyCard
                      key={index}
                      listNum={++index}
                      avatar={item.owner.avatar_url}
                      name={item.name}
                      starsCount={item.stargazers_count}
                      forksCount={item.forks_count}
                      openIssuesCount={item.open_issues_count}
                      htmlUrl={item.html_url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </InfiniteScroll>

      );
    } else if (error) {
      renderInfo = (
        alert(errorContent)
      );
    }
    return (
      <div>
        <Container style={{ marginBottom: 30, marginTop: 30 }}>
          <div style={{ textAlign: 'center' }}>
            {this.state.tabList.map((list, index) => {
              return (
                <NavLink style={{ paddingRight: 30 }}
                  to={{
                    pathname: `/Popular`,
                    search: `?language=${list.name}`,
                  }}
                  className="tab-list"
                  key={index}
                  data-filter={list.name}
                  id={list.name}
                  onClick={(e) => this.switchTab(e, list)}
                >
                  {list.name}
                </NavLink>
              );
            })}
          </div>
        </Container>

        {renderInfo}

      </div>
    );
  }
}

