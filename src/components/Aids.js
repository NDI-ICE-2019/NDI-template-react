import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Select, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { updateCategoryFilter, updateAidsNameFilter } from "../actions/aids";

const fakeData = [{
  "_id": "001",
  "title": "Mobilijeune",
  "description": "Aide financière pour logement",
  "Organization": {
    "_id": "001",
    "name": "ActionLogement",
    "status": "Privée"
  },
  "Category": {
    "_id": "1",
    "label": "Alimentaire"
  },
  "Type": {
    "_id": "001",
    "label": "Remboursement"
  }
},
{
  "_id": "002",
  "title": "APL",
  "description": "Aide financière pour logement",
  "Organization": {
    "_id": "001",
    "name": "ActionLogement",
    "status": "Privée"
  },
  "Category": {
    "_id": "2",
    "label": "Logement"
  },
  "Type": {
    "_id": "001",
    "label": "Remboursement"
  }
}
]

const category = {
  'Alimentaire': 1,
  'Logement': 2,
  'Culture': 3,
  'Sport': 4
}

class Aids extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.data).length === 0) {
      this.props.history.push('/')
    }
    Object.keys(category).map(cat => {
      this.props.updateCategoryFilter(category[cat])
    })
  }

  checkFilter(aid) {
    const { categoryArray, aidsName } = this.props
    return categoryArray.includes(parseInt(aid.Category._id)) &&
      aidsName.length > 0 ? aid.title.toLowerCase().includes(aidsName.toLowerCase()) : true
  }

  _updateCategoryFilter(id) {
    this.props.updateCategoryFilter(id)
    this.forceUpdate()
  }

  _updateAidsNameFilter(event) {
    this.props.updateAidsNameFilter(event.target.value)
  }

  render() {
    const { categoryArray } = this.props
    return (
      <div className="mainAidsWrapper">
        <div className="filterWrapper">

          <Select
            id="selectCategory"
          >
            {Object.keys(category).map(cat => {
              let id = category[cat]
              return (
                <div key={cat}>
                  {cat}
                  <Checkbox key={cat} value={id} checked={categoryArray.includes(id)} onChange={() => this._updateCategoryFilter(id)} />
                </div>
              )
            })}

          </Select>
          <Select
            id="selectType"
          >
            {Object.keys(category).map(cat => {
              let id = category[cat]
              return (
                <div key={cat}>
                  {cat}
                  <Checkbox key={cat} value={id} checked={categoryArray.includes(id)} onChange={() => this._updateCategoryFilter(id)} />
                </div>
              )
            })}

          </Select>
          <div>
            Nom de l'aide:
          <TextField onChange={(text) => this._updateAidsNameFilter(text)} />
          </div>
        </div>
        {fakeData.map(aid => {
          if (this.checkFilter(aid)) {
            return (
              <Paper style={{ padding: 10, margin: 10 }} key={aid._id} className="oneAid">
                <Typography variant="h5" component="h3">
                  {aid.title}
                </Typography>
                <Typography component="p">
                  {aid.description} - {aid.Organization.name}
                </Typography>
              </Paper>
            )
          }
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    mode: state.side.mode,
    open: state.guestForm.open,
    data: state.guestForm.data,
    categoryArray: state.aids.category,
    aidsName: state.aids.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCategoryFilter: data => {
      dispatch(updateCategoryFilter(data))
    },
    updateAidsNameFilter: text => {
      dispatch(updateAidsNameFilter(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Aids));