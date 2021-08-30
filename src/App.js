import React from 'react';

import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
  Column,
  Summary,
  TotalItem,
  ValueFormat,
  GroupItem,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel
} from 'devextreme-react/data-grid';

import DiscountCell from './DiscountCell.js';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
  store: new ODataStore({
    url: "./mock_data.json",
    key: 'id',
   
  })
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.onContentReady = this.onContentReady.bind(this);
  }
  render() {
    return (
      <DataGrid
        dataSource={dataSourceOptions}
        allowColumnReordering={true}
        showBorders={true}
        onContentReady={this.onContentReady}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <Grouping autoExpandAll={false} />

        <Column dataField="Sales Data" groupIndex={0} />
      
        
        <Column dataField="name" dataType="string" />
        <Column dataField="company" dataType="string" width={150} />
        <Column
          dataField="sales"
          caption="Sales"
          dataType="number"
          format="currency"
          alignment="right"
        />
        <Column
          dataField="sales"
          caption="Graphic"
          dataType="number"
          format="percent"
          alignment="right"
          allowGrouping={false}
          cellRender={DiscountCell}
          cssClass="bullet"
          
        /> 
        
        <Summary>
            <TotalItem
              column="sales"
              summaryType="count" />
            <TotalItem
              column="sales"
              summaryType="min"
              customizeText={this.customizeDate} />
              <TotalItem
              column="sales"
              summaryType="max"
              customizeText={this.customizeDate} />
            <TotalItem
              column="sales"
              summaryType="sum"
              valueFormat="currency" />
          </Summary>
        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
    );
  }

  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(['EnviroCare']);
      this.setState({
        collapsed: true
      });
    }
  }
}

export default App;
