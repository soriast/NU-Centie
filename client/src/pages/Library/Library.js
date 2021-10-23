import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import LibraryCard from "./../../components/library/LibraryCard";
import SEO from "../../components/helmet/Helmet";
import InitialLoading from "./InitialLoading";
import {
  getLibrary,
  getLibraryByTitle,
  getLibraryByYear,
  getLibraryByValues,
  getFilterYear,
} from "../../database/root";

const Library = () => {
  const history = useHistory();

  const refForm = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [library, setLibrary] = useState([]);
  const [search, setSearch] = useState({
    title: "",
    year: "All",
  });
  const [FilterYear, setFilterYear] = useState([]);

  const SubmitSearchForm = (e) => {
    SearchItem();
    e && e.preventDefault();
  };

  const SearchItem = async () => {
    setIsLoading(true);
    if (search.title !== "" && search.year !== "All") {
      const response = await getLibraryByValues(search);
      setLibrary(response);
    } else if (search.title !== "" && search.year === "All") {
      const response = await getLibraryByTitle(search.title);
      setLibrary(response);
    } else if (search.title === "" && search.year !== "All") {
      const response = await getLibraryByYear(search.year);
      setLibrary(response);
    } else if (search.title === "" && search.year === "All") {
      await addLibrary();
    }
    setIsLoading(false);
  };

  const insertFilterYear = async () => {
    const response = await getFilterYear();
    setFilterYear(response);
  };

  const onClickView = (id) => {
    history.push(`/library/${id}`);
  };
  const onClickDownload = (e, id) => {
    if (e && e.stopPropagation) e.stopPropagation();
    console.log("Download " + id);
  };

  const addLibrary = async () => {
    setIsLoading(true);
    const response = await getLibrary();
    
    setLibrary(response);
    setIsLoading(false);
  };

  useEffect(() => {
    SubmitSearchForm();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.year]);

  useEffect(() => {
    addLibrary();
    insertFilterYear();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="library">
      <SEO title={`Library | NU Innovation Tech Hub`} />
      <div className="container">
        <h1 className="header">
          Lib<span>rary</span>
        </h1>
      </div>
      <form ref={refForm} onSubmit={SubmitSearchForm}>
        <div className="container">
          <div className="search_container">
            <input
              type="text"
              className="library_search"
              placeholder="Search"
              onChange={(e) => {
                setSearch({ ...search, title: e.target.value });
              }}
            />
            <button type="submit" className="primary solid custom">
              <FaSearch />{" "}
            </button>
          </div>
          <div className="year_container">
            <select
              className="library_year"
              onChange={(e) => {
                setSearch({ ...search, year: e.target.value });
              }}
            >
              <option value="All">All</option>
              {FilterYear.map((year, index) => (
                <option key={index} value={year.year}>
                  {year.year}
                </option>
              ))}
            </select>
            <button className="primary solid custom">
              <IoIosArrowDropdownCircle />
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <div className="card_holder">
          {!isLoading &&
            (library.length !== 0 ? (
              library.map((data, index) => (
                <LibraryCard
                  key={index}
                  img={data.img}
                  title={data.title}
                  id={data.library_ID}
                  onClickView={onClickView}
                  onClickDownload={onClickDownload}
                />
              ))
            ) : (
              <div>No Results Found</div>
            ))}
          {isLoading && <InitialLoading />}
        </div>
      </div>
    </div>
  );
};

export default Library;
