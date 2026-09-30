import React from "react";
import { AdminDropdown } from "./filter/adminDropdown";
import SortSvg from "@/assets/sort.svg?react";


export const formatFilters = (filters) => {
  const formatedFilter = {};
   Object.entries(filters).forEach((v) => {
    formatedFilter[v[0]] = v[1].selected; 
  });
  return formatedFilter;
};

class AdminFilterNav extends React.Component {

  get queries(){
    return this.props?.queries??{};
  }
  constructor(props) {
    super(props);
    this.state = {
      queryStr: "",
      // queries: props.queries??{},
    };
  }



  setNewQueryValue(k, newValue) {

    // const previousQuery = this.state.queries;

    const previousQuery = this.queries;

    const newQuery = Object.assign({}, previousQuery, {
      
      [k]: Object.assign({},previousQuery[k],{
        selected:newValue
      }),
    });

                    // console.log("n selected",n);  
    // console.log("llll ",previousQuery);

    // console.log("aaaa ",newQuery);

    this.setState({
      query: newQuery,
    });

    return newQuery;
  }

  render() {
    const {onUpdated } = this.props;
    // const queries = this.state.queries;
    const queries = this.queries;


    return (
      <div class="flex flex-row  h-[40px] w-full gap-2 items-center rounded-[5px] overflow-hidden p-1">
        {Object.entries(queries).map((q, i) => {
          
          const n = q[0];
          const f = q[1];

          console.log("iwqeoi ",q);
    
          switch (f.type) {
            case "choices":
              return (
                <AdminDropdown
                  onSelected={(selected) => {

                    const newQuery = this.setNewQueryValue(n, selected);
                  
      console.log("def selected",newQuery);  


// this.setState({
//   queries:newQuery
// });
                    onUpdated(newQuery);
                  }}
                  selected={f.selected}
                  identifier={n}
                  choices={f.choices}

                  icon={<SortSvg/>}
                />
              );
          }
          // return <div>{<AdminDropdown key={f.baseQuery} options={{}} />}</div>;
        })}
      </div>
    );
  }
}

export default AdminFilterNav;
