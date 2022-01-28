import { connect } from "react-redux";
import { setSearch } from "../actions/products";
const SearchBar = (props: any) => {
  return (
    <div>
      <input
        type="text"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        className="py-1 px-2 rounded shadow-lg"
        placeholder="search the best groceries"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearch: (val: any) => dispatch(setSearch(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
