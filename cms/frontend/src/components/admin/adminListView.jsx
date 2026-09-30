import FetchPage from "../../pages/admin/fetchPage";
import { OutlinedButton } from "../buttons/outlinedButton";
import { NavLink } from "react-router-dom";
import { DataSheet } from "../dataSheet";
import { AdminGridForm, AdminGridCol } from "./adminGridForm";
import { AdminDataField } from "./adminDataField";
import { Button } from "../buttons/button";
import AdminFilterNav, { formatFilters } from "./adminFilterNav";
import * as Iconsax from "iconsax-reactjs";
import { deleteProducts } from "../../api/productService";
import { LazyLoading } from "../../modules/lazyLoading";
import { useRef, createRef } from "react";
import ContentLoader from "react-content-loader";
import { AdminListViewContext } from "../../core/admin-panel";
import { RemoveDialog } from "./modals/removeDialog";
import {ResponsiveContext} from "@shared/responsiveProvider";


const queries = {
  sort: {
    type: "choices",
    selected: "asc",
    baseQuery: "sort",
    choices: {
      asc: {
        index: 0,
        name: "Asc",
        value: "asc",
      },

      desc: {
        index: 1,
        name: "Desc",
        value: "desc",
      },
    },
  },

  orderBy: {
    type: "choices",
    selected: "createdAt",
    baseQuery: "sort",
    choices: {
      createdAt: {
        index: 0,
        name: "جدیدترین",
        value: "createdAt",
      },

      mostSaled: {
        index: 1,
        name: "پرفروش ترین",
        value: "mostSaled",
      },

      mostViewed: {
        index: 2,
        name: "پربازدیدترین",
        value: "mostViewed",
      },
    },
  },
};

export class AdminListView extends FetchPage {
  // get items(){(2)};

  

  constructor(props) {
    const listContainerRef = createRef();
    super(
      Object.assign({}, props, {
        apiParams: { ...props.apiParams, ...formatFilters(queries) },
        removeState: { open: false, items: [] },

        // page:-1,
        observeds: [],
        lazyLoading: false,
        initialized: false,
        setLazyLoading: (loading) => (this.state.lazyLoading = loading),
        lastLength: 0,
        listContainerRef: listContainerRef,
        observer: null,
        setObserver: (observer) => {
          this.state.observer = observer;
        },
        setLastLength: (lastLength) => (this.state.lastLength = lastLength),
        setObserveds: (ids) => this.state.observeds.push(...ids),
      }),
    );


    this.queries = Object.assign({},queries);
    this.child = this.child.bind(this);

  }

  onItemRemoveDialogRequested(items) {
    this.setState({
      removeState: {
        items: items,
        open: true,
      },
    });
  }
  async onDeleteItems(ids) {
  
    const data = this.state.data;
    const rows = data.rows;
    var { removed, count } = (await deleteProducts(ids)).data;
    removed = removed.map((v) => parseInt(v));

    const _rows = rows.filter((r) => !removed.includes(r.id));

    this.setState({
      data: Object.assign({}, data, { rows: _rows, count: data.count - count }),
        selectedRows: {},

      removeState: {
        items: [],
        open: false,
      },
    });
  }

  child(props) {
    
   
    const _this = props.this;
    const state = _this.state;
    const data = state.data;

    const rows = data?.rows ?? [];
    const cols = data?.cols ?? [];
    const count = data?.count ?? "";
    const title = state.title;
    const selectedTitle = state.selectedTitle;
    const zeroItemTitle = state.zeroItemTitle;
    const headerActions = state.headerActions;
    const selectedQueries = state.apiArgs;
    const selectedRows = _this.state.selectedRows ?? {};
    const removeState = _this.state.removeState;
    const selectedRowsLength = Object.entries(selectedRows).filter(
      (v) => v[1] != false,
    ).length;



    const multiSelect = selectedRowsLength > 1;
    return (
      <AdminListViewContext.Provider
        value={{
          initialized: _this.state.initialized,
          onItemsRemoved: async (items) => {
            _this.onItemRemoveDialogRequested(items);
          },
        }}
      >
        <ResponsiveContext.Consumer>
          {
            ({isMobileSm})=>(
        <AdminGridForm padding={3} margin={0} formColor="white" tw="">
          <AdminGridCol>
            <AdminDataField
              headerSize={isMobileSm?multiSelect?"120px":"130px":multiSelect ? "120px" : "70px"}
              showDot={!multiSelect}
              bottomActions={
                multiSelect
                  ? [
                      <div class="col-items-start h-[70px]">
                        <span class="sub-2 text-neutral-400 ">
                          عملیات گروهی
                        </span>

                        <div class="row items-center h-[60px] ">
                          <div
                            onClick={async () => {
                              const _filterSelected = Object.entries(
                                selectedRows,
                              ).filter((r) => r[1] == true);
                              const items = _filterSelected.map((r) =>
                                parseInt(r[0]),
                              );
                              _this.onItemRemoveDialogRequested(items);
                            }}
                            class="hover:scale-[0.95] cursor-pointer"
                          >
                            <Iconsax.Trash />
                          </div>
                        </div>
                      </div>,
                    ]
                  : [
                      <AdminFilterNav
                        onUpdated={async(newQuery) => {
                          const newApiArgs = formatFilters(newQuery);
                          this.queries = newQuery;

                          await _this.bindApiCall({params:newApiArgs});
                        }}
                        queries={this.queries}
                      />,
                    ]
              }
              headerActions={
                // !multiSelect &&
                <div class="flex flex-row gap-3  ">{headerActions}</div>
              }
              actionVisible={!multiSelect}
              title={
                multiSelect
                  ? selectedTitle(selectedRowsLength)
                  : count == 0
                    ? zeroItemTitle
                    : title(count)
              }
            >
              {}

              <LazyLoading
                listContainerRef={_this.state.listContainerRef}
                setObserver={_this.state.setObserver}
                observer={_this.state.observer}
                page={_this.state.page}
                setObserveds={_this.state.setObserveds}
                observeds={_this.state.observeds}
                setLastLength={_this.state.setLastLength}
                lastLength={_this.state.lastLength}
                initialItems={[]}
                setLazyLoading={_this.state.setLazyLoading}
                onLoadMore={async () => {

                  _this.state.lazyLoading = true;
                  const newTempPage = _this.page + 1;
                  const r = await _this.bindApiCall({
                    params: Object.assign({}, _this.state.apiParams, {
                      page: newTempPage,
                      limit: _this.limit,
                    }),
                    action: "merge",
                  });

                  const _empty = r.data.rows.length == 0;
                  if (_empty) {
                    _this.state.apiParams.page -= 1;
                  } else {
                  }
                  return true;
                }}
              >
                <DataSheet
                  tableRef={_this.state.listContainerRef}
                  lazyLoading={_this.state.lazyLoading}
                  vertSeprator={false}
                  hrSeprator={true}
                  cols={cols}
                  rows={rows}
                  onUpdate={(callback) => {
                    callback(_this);
                  }}
                  selectedRows={selectedRows}
                  selectRows={(rows) => {
                    _this.state.loading = true;
                    _this.setState({
                      selectedRows: rows,
                    });
                  }}
                />
              </LazyLoading>
            </AdminDataField>
          </AdminGridCol>
          
          <RemoveDialog
            removeState={removeState}
            onDelete={async (ids) => {
              await _this.onDeleteItems(ids);
            }}
            onCanceled={() => {
              _this.setState({
                removeState:{
                  open:false,
                  items:[]
                }
              })
            }}
          />
        </AdminGridForm>
            )
          }
        </ResponsiveContext.Consumer>
      </AdminListViewContext.Provider>
    );
  }

  render() {
    return super.render();
  }
}
