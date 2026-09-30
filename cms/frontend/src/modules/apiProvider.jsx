import React from "react";

class ApiProvider extends React.Component {
  get page() {
    return this.state.apiParams.page;
  }
  get limit() {
    return this.state.apiParams.limit;
  }

  constructor(props) {
    super(props);
    this.apiCall = props.apiCall;
    this.apiArgs = props.apiArgs;
    this.apiParams = props.apiParams;
    this.apiRef = props.apiRef;
    this.state = {
      apiCall: this.apiCall,
      apiArgs: this.apiArgs,
      apiParams: this.apiParams,
      data: null,
      fetched: false,
      ...props,
    };

    // console.log("wehrjkwre ",this.);
    this.requestDatas({
      apiParams: this.state.apiParams,
      apiArgs: this.state.apiArgs,
    });
  }

  async refresh(data = null) {
    console.log("refresh called ", data);
  }

  async bindApiCall({
    args = this.state.apiArgs,
    params = this.state.params,
    action = "set",
  }) {
    this.setState({
      data: action == "set" ? null : this.state.data,
      fetched: false,
      apiArgs: args,
      apiParams: params,
    });

    return await this.requestDatas({
      args: args,
      params: params,
      action: action,
    });
  }

  async requestDatas({
    args = this.state.apiArgs,
    params = this.state.apiParams,
    action = "set",
  }) {

    console.log("params ",params);
    // sort: 'desc', orderBy: 'createdAt'}
    // initial -> {page: 0, limit: 20, sort: 'asc', orderBy: 'createdAt'}
    // return;
    const res = await this.state.apiCall({ args: args, params: params });

    const { data } = res;


    if (action == "set") {
    

      this.setState({
        data: data,
        fetched: true,
        t: this,
      });
      

    } else if (action == "merge") {
      const currentData = this.state.data;
      const newRows = data.rows;

      this.setState({
        data: Object.assign(currentData, currentData, {
          rows: [
            ...currentData.rows,
            ...newRows.filter(
              (item) => !currentData.rows.some((v) => v.id == item.id),
            ),
          ],
        }),
        fetched: true,
        t: this,
      });
    }
    this.state.initialized = true;


    return res;
    // this.props.then(data);
  }

  child(props) {
    return <div>Empty</div>;
  }

  render() {
    const fetched = this.state.fetched;
    // if (!fetched) {
    //   return <div>loading</div>;
    // }

    const Child = this.child;

    
    return (
      <>
        {/* {this.props.children} */}
        {<Child this={this} />}
      </>
    );
  }
}

export default ApiProvider;
