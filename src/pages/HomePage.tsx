import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ShowFinderContext } from "../utils/context/showFinder/ShowFinderState";
import Show from "../components/Show";

const HomePage: React.FC = () => {
  const { getAllShow, allShowFinder } = useContext(ShowFinderContext);
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    getAllShow(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const perPage = 10;
  const offset = currentPage * perPage;
  const currentPageData = allShowFinder
    .slice(offset, offset + perPage)
    .map((data) => (
      <div key={data.id}>
        <Show movie={data} />
      </div>
    ));
  const pageCount = Math.ceil(allShowFinder.length / perPage);
  const handlePageClick = (page: { selected: number }) => {
    setCurrentPage(page.selected);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel="<- Previous"
        nextLabel="Next ->"
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center pagination-circle"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
      {currentPageData || (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage;
