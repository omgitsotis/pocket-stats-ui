import React, { useEffect, useState } from 'react';
import Head from 'next/head';
const { DateTime } = require("luxon");

import axios from '../libs/axios';

import { DROPDOWN_RELATIVE, DROPDOWN_ABSOLUTE } from '../libs/const';
import {TagList} from '../libs/tags';
import Layout from '../components/Layout/Layout';
import TagRanking from '../components/UI/Tags/Ranking';
import DropdownButton from '../components/UI/Button/DropdownButton';
import TimeRange from '../components/UI/Stats/TimeRange/TimeRange';
import TagFilter from '../components/UI/Tags/TagFilter';
import TagInfo from '../components/UI/Tags/Info';

export default function Tags() {
  const [state, setState] = useState({
    startDate: DateTime.local().toUTC().startOf('day').minus({ days: 7 }),
    endDate: DateTime.local().toUTC().startOf('day'),
    dropdown: DROPDOWN_RELATIVE,
    relativeValue: "7",
    selectedTag: "",
    tags: {...TagList.reduce((obj, item) => ({...obj, [item]: false}), {})},
    data: {},
  });

  const getStats = (start, end) => {
    axios.get(`/stats/tag?start=${start}&end=${end}`)
      .then(response => {
        console.log(response.data);
        setState({
          ...state,
          data: response.data,
        })
      })
      .catch(error => onError(error, "couldn't get stats"))
  }

  const onError = (err, message) => {
    console.error(err)
  }

  const onDateChanged = (field, date) => {
    switch (field) {
      case "start":
        setState({
          ...state,
          startDate: DateTime.fromISO(date)
        });

        break;
      case "end":
        setState({
          ...state,
          endDate: DateTime.fromISO(date)
        });

        break;
      default:
        return;
    }
  }

  const onDropdownChanged = (field) => {
    switch (field) {
      case "relative":
        setState({
          ...state,
          dropdown: DROPDOWN_RELATIVE
        });
        break;
      case "absolute":
        setState({
          ...state,
          dropdown: DROPDOWN_ABSOLUTE
        });
      default:
        return;
    }
  }

  const onRelativeChanged = (value) => {
    switch (value) {
      case "7":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 7 })
        });
        break;

      case "14":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 14 })
        });
        break;

      case "30":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 30 })
        });
        break;

      case "60":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 60 })
        });
        break;

      case "90":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 90 })
        });
        break;

      case "365":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 365 })
        });
        break;

      default:
        return;
    }
  }

  const onTagChanged = (tagName) => {
    let newSelectedTag = tagName;
    let newTags = {
      ...state.tags
    };

    if (tagName !== state.selectedTag) {
      newTags[tagName] = true;
      newTags[state.selectedTag] = false;
    } else {
      newTags[tagName] = !newTags[tagName];
      newSelectedTag = ""
    }


    setState({
      ...state,
      selectedTag: newSelectedTag,
      tags: {
        ...newTags
      },
    });
  }

  // Call getStats whenever the start and end dates are changes
  useEffect(() => {
    getStats(state.startDate.toSeconds(), state.endDate.toSeconds());
  }, [state.startDate, state.endDate])

  let base = (
    <div className="row">
      <div className="col-4">
        <TagRanking data={state.data.tags} type="articles_read"/>
      </div>
      <div className="col-4">
        <TagRanking data={state.data.tags} type="words_read"/>
      </div>
      <div className="col-4">
        <TagRanking data={state.data.tags} type="time_read"/>
      </div>
    </div>
  );

  if (state.selectedTag !== "") {
    base = (
       <TagInfo name={(state.selectedTag)} tag={(state.data.tags === undefined) ? {} : state.data.tags[state.selectedTag]}/>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Tags</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="content text-center">
          <div style={{ margin: 'auto' }}>
            <div className="frame">
              <div className="frame__body" style={{ "overflow": "hidden" }}>
                <div className="row p-0 level fill-height">
                  <div className="col-10">
                    <h1 className="headline-4">Tags</h1>
                  </div>
                </div>
                <div className="divider" />
                <div className="row p-0 level fill-height">
                  <div className="col-1">
                    <DropdownButton state={state.dropdown} onSelected={onDropdownChanged} />
                  </div>
                  <TimeRange
                    startDate={state.startDate}
                    endDate={state.endDate}
                    dropdownState={state.dropdown}
                    onDateChanged={onDateChanged}
                    relativeValue={state.relativeValue}
                    onRelativeChanged={onRelativeChanged}
                  />
                </div>
                <div className="divider" />
                <TagFilter onTagClicked={onTagChanged} tagList={TagList} tagState={state.tags}/>
                <div className="divider" />
                {base}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}