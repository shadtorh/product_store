import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
	return (
		<div className="flex justify-center mt-6">
			<ReactPaginate
				previousLabel={"← Previous"}
				nextLabel={"Next →"}
				pageCount={pageCount}
				onPageChange={onPageChange}
				containerClassName={"flex space-x-2"}
				pageClassName={
					"px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}
				activeClassName={"bg-primary text-white"}
				previousClassName={
					"px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}
				nextClassName={
					"px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"
				}
				disabledClassName={"opacity-50 cursor-not-allowed"}
			/>
		</div>
	);
};

export default Pagination;
